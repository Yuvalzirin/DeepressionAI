package com.coreApplication.Model;

import lombok.NoArgsConstructor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@NoArgsConstructor
public class DLModel {

    public float predict(String text) {
        try {
            Process p = getProcess(text);

            int exitCode = p.waitFor();
            if (exitCode == 0) {
                BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
                String output = in.readLine();
                if (output != null) {
                    return Float.parseFloat(output.trim());
                } else {
                    System.err.println("No output from the Python script.");
                    return 0;
                }
            } else {
                BufferedReader error = new BufferedReader(new InputStreamReader(p.getErrorStream()));
                String errorLine;
                while ((errorLine = error.readLine()) != null) {
                    System.err.println(errorLine);
                }
                return 0;
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return 0;
        }
    }

    private static Process getProcess(String text) throws IOException {
        // In Order to run the virtual environment:
        // 1. In the console write the following commands:
        // a. python3 -m venv venv    
        // b. source venv/bin/activate
        // c. pip install torch transformers
        // 2. Change the absolutePath to the path of the virtual environment in the project
        String absolutePath = "/Users/delouya.thefist/IdeaProjects/DL-Project/venv/bin/activate";
        String command = "/bin/zsh -c \"source " + absolutePath + " && python src/main/python/modelPredictionScript.txt \\\"" + text.replace("\"", "\\\"") + "\\\"\"";
        ProcessBuilder pb = new ProcessBuilder("/bin/zsh", "-c", command);
        Process p = pb.start();
        return p;
    }
}
