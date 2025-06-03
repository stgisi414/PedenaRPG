
// Standalone syntax checker for script.js
(function() {
    'use strict';
    
    console.log('🔧 Starting syntax analysis...');
    
    async function loadAndCheckScript() {
        try {
            const response = await fetch('./script.js');
            const scriptContent = await response.text();
            
            console.log(`📄 Loaded script.js: ${scriptContent.length} characters`);
            
            // Split into manageable chunks to isolate errors
            const lines = scriptContent.split('\n');
            console.log(`📝 Total lines: ${lines.length}`);
            
            // Check for basic structure issues
            let openBraces = 0;
            let openParens = 0;
            let inString = false;
            let stringChar = '';
            let errors = [];
            
            for (let lineNum = 0; lineNum < lines.length; lineNum++) {
                const line = lines[lineNum];
                
                for (let i = 0; i < line.length; i++) {
                    const char = line[i];
                    const prevChar = i > 0 ? line[i-1] : '';
                    
                    // Handle strings
                    if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
                        if (!inString) {
                            inString = true;
                            stringChar = char;
                        } else if (char === stringChar) {
                            inString = false;
                            stringChar = '';
                        }
                    }
                    
                    if (!inString) {
                        if (char === '{') openBraces++;
                        if (char === '}') openBraces--;
                        if (char === '(') openParens++;
                        if (char === ')') openParens--;
                        
                        if (openBraces < 0) {
                            errors.push(`Line ${lineNum + 1}: Extra closing brace`);
                        }
                        if (openParens < 0) {
                            errors.push(`Line ${lineNum + 1}: Extra closing parenthesis`);
                        }
                    }
                }
                
                // Check if line ends in string
                if (inString) {
                    errors.push(`Line ${lineNum + 1}: Unterminated string`);
                    inString = false;
                }
            }
            
            if (openBraces !== 0) {
                errors.push(`Missing ${openBraces > 0 ? 'closing' : 'opening'} braces: ${Math.abs(openBraces)}`);
            }
            
            if (openParens !== 0) {
                errors.push(`Missing ${openParens > 0 ? 'closing' : 'opening'} parentheses: ${Math.abs(openParens)}`);
            }
            
            if (errors.length > 0) {
                console.error('❌ SYNTAX ERRORS FOUND:');
                errors.forEach(error => console.error(`  - ${error}`));
            } else {
                console.log('✅ No basic syntax errors detected');
            }
            
            // Try to evaluate the script
            try {
                new Function(scriptContent);
                console.log('✅ Script compiles successfully');
            } catch (evalError) {
                console.error('❌ COMPILATION ERROR:', evalError.message);
                
                // Find the problematic area
                const errorLine = evalError.lineNumber || 1;
                const startLine = Math.max(0, errorLine - 5);
                const endLine = Math.min(lines.length, errorLine + 5);
                
                console.error('📍 Context around error:');
                for (let i = startLine; i < endLine; i++) {
                    const marker = i === errorLine - 1 ? '>>> ' : '    ';
                    console.error(`${marker}${i + 1}: ${lines[i]}`);
                }
            }
            
            // Show file ending
            console.log('📄 Last 5 lines of file:');
            const lastLines = lines.slice(-5);
            lastLines.forEach((line, i) => {
                console.log(`${lines.length - 5 + i + 1}: ${line}`);
            });
            
        } catch (error) {
            console.error('❌ Failed to load script.js:', error.message);
        }
    }
    
    // Run the check
    loadAndCheckScript();
    
})();
