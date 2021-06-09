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

#### &emsp;&emsp; macOS or Linux

&emsp;&emsp;&emsp; In *```~/.zshenv```*, *```~/.bashrc```*, *```~/.bash_profile```*, or similar shell startup scripts add the following: <br/>

&emsp;&emsp;&emsp; **```export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk```** <br/>
&emsp;&emsp;&emsp; **```export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin```** <br/>
&emsp;&emsp;&emsp; **```export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools```** <br/>
&emsp;&emsp;&emsp; **```export PATH=$PATH:$ANDROID_SDK_ROOT/emulator```**<br/> 
&emsp;&emsp;&emsp; **```export JAVA_HOME=$(/usr/libexec/java_home)```**

#### &emsp;&emsp; Windows

&emsp;&emsp;&emsp; 3.1 Open any folder on your computer <br/>
&emsp;&emsp;&emsp; 3.2 In the navigation pane right-click This PC and select Properties <br/>
&emsp;&emsp;&emsp; 3.3 Click Advanced system settings <br/>
&emsp;&emsp;&emsp; 3.4 Click Environment variables <br/>
&emsp;&emsp;&emsp; 3.5 Click in the New button <br/>
&emsp;&emsp;&emsp; 3.6 In variable name put *ANDROID_SDK_ROOT* <br/>
&emsp;&emsp;&emsp; 3.7 In variable value put *C:\Users\<yout-user>\AppData\Local\Android\Sdk* or the location of the Android SDK <br>
&emsp;&emsp;&emsp; 3.9 Click Ok <br/>
&emsp;&emsp;&emsp; 3.10 Find the system variable called Path and click Edit <br/>
&emsp;&emsp;&emsp; 3.11 Click New <br/>
&emsp;&emsp;&emsp; 3.12 Add *C:\Program Files\Java\jre1.8.0_291\bin* or the location of the Java Runtime Environment <br/>

4. If the folder */android* does not exists run command **```ionic capacitor add android```**
5. Run command **```ionic capacitor run android```**
