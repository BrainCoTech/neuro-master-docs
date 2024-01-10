# Arduino C

[Arduino IDE 设置](https://www.brainco-hz.com/docs/NeuroMaster/docs/BrianAI_Arduino-C.docx)

## 手指/手势

```cpp
// 手指序号枚举
enum class FingerNumber : uint8_t {
  Thumb = 0x1,   // 大拇指
  Index = 0x2,   // 食指
  Middle = 0x3,  // 中指
  Ring = 0x4,    // 无名指
  Little = 0x5,  // 小指
};
/**
 * 获取特定手指的位置。
 * @param no 手指的编号（大拇指、食指、中指、无名指或小指）
 * @return 手指的当前位置（0 到 100）
 */
uint8_t nm_get_finger(FingerNumber no);
/**
 * 设置手指
 * @param fingerNum 手指的编号（大拇指、食指、中指、无名指或小指）
 * @param position 手指的目标位置（0 到 100）
 */
void setFinger(FingerNumber fingerNum, uint8_t position);

/**
 * 同时设置所有手指的位置。
 * @param pos1 手指1的位置（0 到 100）
 * @param pos2 手指2的位置（0 到 100）
 * @param pos3 手指3的位置（0 到 100）
 * @param pos4 手指4的位置（0 到 100）
 * @param pos5 手指5的位置（0 到 100）
 */
void setAllFinger(uint8_t pos1, uint8_t pos2, uint8_t pos3, uint8_t pos4, uint8_t pos5);

// 手势序号枚举
enum class GestureNumber : uint8_t {
  Reset = 0,     // 重置手势
  Pinch = 1,     // 捏取手势
  Grasp = 2,     // 抓握手势
  SidePinch = 3, // 侧捏取手势
  Tripod = 4,    // 三脚架手势
  Wave = 5,      // 挥手手势
  Scissors = 6,  // 剪刀手势
  Rock = 7,      // 石头手势
  Paper = 8      // 布手势
};
/**
 * 设置手势
 * @param gestureNum 手势的编号
 * @param position 手势的目标位置（0 到 100）
 */
void setGesture(GestureNumber gestureNum, uint8_t position);
```

## 小车/马达/舵机

```cpp
enum class CarAction : uint8_t {
  Forward = 1,    // 前进
  Backward = 2,   // 后退
  Left = 3,       // 左转
  Right = 4       // 右转
};
/**
 * 设置小车动作
 * @param carAction 小车的目标动作（前进、后退、左转或右转）
 * @param speed 小车的速度（0 到 100）
 * @param time 动作持续时间（0 到 255）
 */
void setCar(CarAction carAction, uint8_t speed, uint8_t time);

// 马达编号枚举
enum class MotorNumber : uint8_t {
  Motor1 = 0,    // 马达1
  Motor2 = 1,    // 马达2
  MotorAll = 2   // 马达1+2
};
/**
 * 设置马达参数
 * @param motorNumber 马达的编号（马达1、马达2 或 马达1+马达2）
 * @param direction 马达的方向（0 表示前进，1 表示后退）
 * @param speed 马达的速度（0 到 100）
 * @param angle 马达的旋转角度（0 到 100）
 * @param time 马达动作的持续时间（0 到 255）
 */
void setMotor(MotorNumber motorNumber, uint8_t direction, uint8_t speed, uint8_t angle, uint8_t time);

enum class ServoNumber : uint8_t {
  Servo1 = 0,    // 舵机1
  Servo2 = 1     // 舵机2
};
/**
 * 设置舵机的角度
 * @param servoNumber 舵机的编号（Servo1 或 Servo2）
 * @param angle 舵机的目标角度（0 到 100）
 */
void setServo(ServoNumber servoNumber, uint8_t angle);
```

## LED

```cpp
/**
 * 设置特定 LED 的颜色。
 * @param r 颜色的红色分量（0 到 255）
 * @param g 颜色的绿色分量（0 到 255）
 * @param b 颜色的蓝色分量（0 到 255）
 */
void setLed(uint8_t r, uint8_t g, uint8_t b, InterfaceCode port);

/**
 * 检查给定的 RGB 颜色是否在红色范围内
 * @return 如果颜色在红色范围内则返回 true，否则返回 false
 */
bool isRedColor(int red, int green, int blue);

/**
 * 检查给定的 RGB 颜色是否在绿色范围内
 * @return 如果颜色在绿色范围内则返回 true，否则返回 false
 */
bool isGreenColor(int red, int green, int blue);

/**
 * 检查给定的 RGB 颜色是否在蓝色范围内
 * @return 如果颜色在蓝色范围内则返回 true，否则返回 false
 */
bool isBlueColor(int red, int green, int blue);
```

## 传感器

```cpp
// 传感器类型枚举
enum class SensorType : uint8_t {
  SoftSmall = 1,       // 小柔性传感器
  Hall = 2,            // 霍尔传感器
  RGB = 3,             // RGB传感器
  Infrared = 4,        // 红外传感器
  Ultrasonic = 5,      // 超声波传感器
  Temperature = 6,     // 温度传感器
  Sound = 7,           // 声音传感器
  EMG = 8,             // 肌电信号传感器
  LED = 9,             // LED控制
  Potentiometer = 10,  // 旋转电位传感器
  Button = 11,         // 按钮传感器
  SoftBig = 12         // 大柔性传感器
};

// 接口编号枚举
enum class InterfaceCode : uint8_t {
  A = 0,   // 接口A
  B = 1,   // 接口B
  C = 2,   // 接口C
  D = 3,   // 接口D
  E = 4,   // 接口E
  F = 5    // 接口F，高级接口
};

/**
 * 检查特定传感器是否准备好在特定接口中读取。
 * @param sensorType 传感器的类型
 * @param interface 接口编号
 * @return 如果传感器准备就绪则返回 true，否则返回 false。
 */
bool nm_is_sensor_ready(SensorType sensorType, InterfaceCode interface);

/**
 * 检查特定传感器是否在特定接口中开启。
 * @param sensorType 传感器的类型
 *                  有效的传感器类型：霍尔传感器、红外传感器、声音传感器、按钮传感器。
 * @param interface 接口编号
 * @return 如果传感器已开启则返回 true，否则返回 false。
 */
bool nm_is_sensor_on(SensorType sensorType, InterfaceCode interface);

/**
 * 从特定传感器在特定接口中获取一个16位整数值。
 * @param sensorType 传感器的类型
 *                  有效的传感器类型：小柔性传感器、超声波传感器、温度传感器、旋转电位传感器、肌电信号传感器。
 * @param interface 接口编号
 * @return 从传感器读取的 16 位整数值。
 *         对于超声波传感器，[0-1000]（0.1 cm）
 *         对于温度传感器，[-200-1000]（0.1℃）
 */
int16_t nm_get_sensor_int16(SensorType sensorType, InterfaceCode interface);

/**
 * 从颜色传感器在特定接口中获取特定 RGB 分量的值。
 * @param interface 接口编号
 * @param index RGB 分量的索引（0 表示红色，1 表示绿色，2 表示蓝色）。
 * @return RGB 分量的值（0 到 255）。
 */
uint8_t nm_get_rgb_value(InterfaceCode interface, uint8_t index);

/**
 * 从颜色传感器在特定接口编号中获取 RGB 分量值数组。
 * @param interface 接口编号
 * @return 指向 RGB 分量值数组的指针（红色、绿色、蓝色）。
 */
uint8_t* nm_get_rgb_values(InterfaceCode interface);

/**
 * 获取特定编号大柔性传感器的值。
 * @param no 编号（1 到 5）
 * @return 获取的值。
 *         如果编号超出范围或传感器数据获取失败，则返回 0。
 */
uint8_t getSoftBig(int no);
```

## 遥控器按键

```cpp
enum class IRKeyCode : uint8_t {
  None = 0,     // 无按键
  Key1 = 1,     // '1' 键
  Key2 = 2,     // '2' 键
  Key3 = 3,     // '3' 键
  Key4 = 4,     // '4' 键
  Key5 = 5,     // '5' 键
  Key6 = 6,     // '6' 键
  Key7 = 7,     // '7' 键
  Key8 = 8,     // '8' 键
  Key9 = 9,     // '9' 键
  Key0 = 10,    // '0' 键
  Plus = 12,    // '+' 键
  Minus = 13,   // '-' 键
  A = 14,       // 'A' 键
  B = 15,       // 'B' 键
  C = 16,       // 'C' 键
  D = 17,       // 'D' 键
  E = 18,       // 'E' 键
  F = 19,       // 'F' 键
  Func1 = 20,   // FUNC1 键
  Func2 = 21,   // FUNC2 键
  Func3 = 22,   // FUNC3 键
};

/**

* 获取当前按下的遥控器按键代码。
* @return 遥控器按键代码。
 */
uint8_t nm_get_ir_key();

/**

* 检查特定遥控器按键是否当前按下。
* @param key 要检查的遥控器按键代码。
* @return 如果按键被按下则返回 true，否则返回 false。
 */
bool nm_is_ir_key_pressed(uint8_t key);

```

## 数字/模拟输入输出

```cpp
/**
 * 数字电平
 */
enum class GPIOLevel : uint8_t {
  Low = 0x00,  // 输出低电平
  High = 0x01, // 输出高电平
};

/**
 * 设置特定数字引脚电平
 * @param gpioNumber 数字引脚编号 [1-15]
 * @param level 数字电平
 */
void setGPIO(uint8_t gpioNumber, GPIOLevel level);

/**
 * 获取数字引脚为高电平
 * @param no 数字引脚编号 [1-15]
 * @return 如果处于高状态则返回 true，否则返回 false
 */
bool nm_get_gpio(uint8_t no);

/**
 * 从特定模拟输入引脚获取模拟值
 * @param no 模拟输入引脚编号 [1-10]
 * @return 从输入引脚读取的模拟值 [0-4095]
 */
uint16_t nm_get_aio(uint8_t no);
```
