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

&emsp;&emsp;&emsp;&emsp; **```export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk```** <br/>
&emsp;&emsp;&emsp;&emsp; **```export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin```** <br/>
&emsp;&emsp;&emsp;&emsp; **```export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools```** <br/>
&emsp;&emsp;&emsp;&emsp; **```export PATH=$PATH:$ANDROID_SDK_ROOT/emulator```**<br/> 
&emsp;&emsp;&emsp;&emsp; **```export JAVA_HOME=$(/usr/libexec/java_home)```**

#### &emsp;&emsp; Windows

&emsp;&emsp;&emsp;3.1 Open any folder on your computer <br/>
&emsp;&emsp;&emsp;3.2 In the Navigation Pane right-click This PC and select Properties <br/>
&emsp;&emsp;&emsp;3.3 Click Advanced system settings <br/>
&emsp;&emsp;&emsp;3.4 Click Environment Variables <br/>

4. If the folder */android* does not exists run command **```ionic capacitor add android```**
5. Run command **```ionic capacitor run android```**
