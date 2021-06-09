<h1 align="center">
  <img src="https://github.com/claudio-familia/WalletPlanifier-mobile/blob/master/wallet-planning.png" width="100%"/><br/>
</h1>

### Run for Web

1. Go to folder */src/* using the console or terminal
2. Run command **```npm install```**
3. Run command **```npm install -g @ionic/cli```**
4. Run command **```ionic serve```**

### Develop for Android

1. Install Android Studio
2. Install Java SE Development Kit 15 
3. Configure: 

#### &emsp;&emsp; Windows

&emsp;&emsp;&emsp; 3.1 Open any folder on your computer <br/>
&emsp;&emsp;&emsp; 3.2 In the navigation pane right-click This PC and select Properties <br/>
&emsp;&emsp;&emsp; 3.3 Click Advanced system settings <br/>
&emsp;&emsp;&emsp; 3.4 Click Environment variables <br/>
&emsp;&emsp;&emsp; 3.5 Click in the New button <br/>
&emsp;&emsp;&emsp; 3.6 In variable name put *ANDROID_SDK_ROOT* <br/>
&emsp;&emsp;&emsp; 3.7 In variable value put *C:\Users\your-user\AppData\Local\Android\Sdk* or the location of the Android SDK <br>
&emsp;&emsp;&emsp; 3.8 Click Ok <br/>
&emsp;&emsp;&emsp; 3.9 Find the system variable called Path and click Edit <br/>
&emsp;&emsp;&emsp; 3.10 Click New <br/>
&emsp;&emsp;&emsp; 3.11 Add *C:\Program Files\Java\jdk-15\bin* or the location of the Java Runtime Environment 15 <br>
&emsp;&emsp;&emsp; 3.12 Click Ok

#### &emsp;&emsp; macOS or Linux

&emsp;&emsp;&emsp; In *```~/.zshenv```*, *```~/.bashrc```*, *```~/.bash_profile```*, or similar shell startup scripts add the following: <br/>

&emsp;&emsp;&emsp; **```export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk```** <br/>
&emsp;&emsp;&emsp; **```export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin```** <br/>
&emsp;&emsp;&emsp; **```export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools```** <br/>
&emsp;&emsp;&emsp; **```export PATH=$PATH:$ANDROID_SDK_ROOT/emulator```**<br/> 
&emsp;&emsp;&emsp; **```export JAVA_HOME=$(/usr/libexec/java_home)```**

4. Go to project folder */src/* using the console or terminal
5. If the folder */android* does not exists run command **```ionic capacitor add android```**
6. Run command **```ionic capacitor run android```**
