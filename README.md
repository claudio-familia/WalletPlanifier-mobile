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
2. Install Java Runtime Environment 16 
3. Configure for macOS or Linux, in *```~/.zshenv```*, *```~/.bashrc```*, *```~/.bash_profile```*, or similar shell startup scripts add the following: <br/>
     
     >**```export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk```** <br/>
     >**```export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin```** <br/>
     >**```export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools```** <br/>
     >**```export PATH=$PATH:$ANDROID_SDK_ROOT/emulator```**<br/> 
     
     >**```export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_291.jdk/Contents/Home ```**
4. If the folder */android* does not exists run command **```ionic capacitor add android```**
5. Run command **```ionic capacitor run android```**
