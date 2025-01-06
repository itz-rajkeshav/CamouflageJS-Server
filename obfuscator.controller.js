import JavaScriptObfuscator from 'javascript-obfuscator';
export const obfuscator=(req,res)=>{
    try {
        const {code}=req.body;
        // console.log(code);
        if (!code) {
            return res.status(400).json({ error: 'No code provided!' });
          }
          const options = {
            compact:true,
            debugProtection:false,
            log:false,
            renameGlobals:true,
            identifierNamesGenerator: 'hexadecimal',
            identifiersPrefix: 'obf_',
            ignoreImports:true,
            numbersToExpressions:true,
            optionPreset:'high-obfuscation',
            stringArray:true,
            stringArrayEncoding: ['base64'],
            transformObjectKeys:true,
            unicodeEscapeSequence: false
        }
    const resultCode=JavaScriptObfuscator.obfuscate(code,options).getObfuscatedCode();
    return res.status(200).json({resultCode})
    } catch (error) {
        console.log(error);  
    }
}


    