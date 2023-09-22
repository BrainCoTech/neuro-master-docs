# Arduino C

## Finger & Gesture

```cpp
// Finger number enumeration
enum class FingerNumber : uint8_t {
  Thumb = 0x1,   // Thumb
  Index = 0x2,   // Index finger
  Middle = 0x3,  // Middle finger
  Ring = 0x4,    // Ring finger
  Little = 0x5,  // Little finger
};
/**
 * Get the position of a specific finger.
 * @param no The number of the finger (Thumb, Index, Middle, Ring, or Little).
 * @return The current position of the finger (0 to 100).
 */
uint8_t nm_get_finger(FingerNumber no);
/**
 * Set the position of a specific finger.
 * @param fingerNum The number of the finger (Thumb, Index, Middle, Ring, or Little).
 * @param position The desired position of the finger (0 to 100).
 */
void setFinger(FingerNumber fingerNum, uint8_t position);

/**
 * Set positions for all fingers simultaneously.
 * @param pos1 Position for finger 1 (0 to 100).
 * @param pos2 Position for finger 2 (0 to 100).
 * @param pos3 Position for finger 3 (0 to 100).
 * @param pos4 Position for finger 4 (0 to 100).
 * @param pos5 Position for finger 5 (0 to 100).
 */
void setAllFinger(uint8_t pos1, uint8_t pos2, uint8_t pos3, uint8_t pos4, uint8_t pos5);

// Gesture number enumeration
enum class GestureNumber : uint8_t {
  Reset = 0,     // Reset gesture
  Pinch = 1,     // Pinch gesture
  Grasp = 2,     // Grasp gesture
  SidePinch = 3, // Side pinch gesture
  Tripod = 4,    // Tripod gesture
  Wave = 5,      // Wave gesture
  Scissors = 6,  // Scissors gesture
  Rock = 7,      // Rock gesture
  Paper = 8      // Paper gesture
};
/**
 * Set the position of a specific gesture.
 * @param gestureNum The number of the gesture.
 * @param position The desired position of the gesture (0 to 100).
 */
void setGesture(GestureNumber gestureNum, uint8_t position);
```

## Car

```cpp
enum class CarAction : uint8_t {
  Forward = 1,    // Forward
  Backward = 2,   // Backward
  Left = 3,       // Left turn
  Right = 4       // Right turn
};
/**
 * Set actions for a robotic car.
 * @param carAction The desired action for the car (Forward, Backward, Left, or Right).
 * @param speed Speed of the car (0 to 100).
 * @param time Duration of the action (0 to 255).
 */
void setCar(CarAction carAction, uint8_t speed, uint8_t time);

// Motor number enumeration
enum class MotorNumber : uint8_t {
  Motor1 = 0,    // Motor 1
  Motor2 = 1,    // Motor 2
  MotorAll = 2   // Both motors (Motor 1 + Motor 2)
};
/**
 * Set motor parameters for specific actions.
 * @param motorNumber The number of the motor (Motor1, Motor2, or MotorAll).
 * @param direction Motor direction (0 for forward, 1 for backward).
 * @param speed Motor speed (0 to 100).
 * @param angle Motor rotation angle (0 to 100).
 * @param time Duration of motor action (0 to 255).
 */
void setMotor(MotorNumber motorNumber, uint8_t direction, uint8_t speed, uint8_t angle, uint8_t time);

enum class ServoNumber : uint8_t {
  Servo1 = 0,    // Servo 1
  Servo2 = 1     // Servo 2
};
/**
 * Set the angle of a specific servo.
 * @param servoNumber The number of the servo (Servo1 or Servo2).
 * @param angle Desired servo angle (0 to 100).
 */
void setServo(ServoNumber servoNumber, uint8_t angle);
```

## LED

```cpp
/**
 * Set the color of a specific LED.
 * @param r Red component of the color (0 to 255).
 * @param g Green component of the color (0 to 255).
 * @param b Blue component of the color (0 to 255).
 * @param port The interface code (InterfaceCode enumeration).
 */
void setLed(uint8_t r, uint8_t g, uint8_t b, InterfaceCode port);

/**
 * Check if the given RGB color is in the red color range.
 * @param red Red component of the color (0 to 255).
 * @param green Green component of the color (0 to 255).
 * @param blue Blue component of the color (0 to 255).
 * @return True if the color is in the red range, else false.
 */
bool isRedColor(int red, int green, int blue);

/**
 * Check if the given RGB color is in the green color range.
 * @param red Red component of the color (0 to 255).
 * @param green Green component of the color (0 to 255).
 * @param blue Blue component of the color (0 to 255).
 * @return True if the color is in the green range, else false.
 */
bool isGreenColor(int red, int green, int blue);

/**
 * Check if the given RGB color is in the blue color range.
 * @param red Red component of the color (0 to 255).
 * @param green Green component of the color (0 to 255).
 * @param blue Blue component of the color (0 to 255).
 * @return True if the color is in the blue range, else false.
 */
bool isBlueColor(int red, int green, int blue);
```

## Sensor

```cpp
// Enumeration of sensor types
enum class SensorType : uint8_t {
  SoftSmall = 1,       // Small soft sensor
  Hall = 2,            // Hall sensor
  RGB = 3,             // RGB sensor
  Infrared = 4,        // Infrared sensor
  Ultrasonic = 5,      // Ultrasonic sensor
  Temperature = 6,     // Temperature sensor
  Sound = 7,           // Sound sensor
  EMG = 8,             // EMG signal sensor
  LED = 9,             // LED control
  Potentiometer = 10,  // Potentiometer sensor
  Button = 11,         // Button sensor
  SoftBig = 12         // Large soft sensor
};

// Enumeration of interface codes
enum class InterfaceCode : uint8_t {
  A = 0,   // Interface A
  B = 1,   // Interface B
  C = 2,   // Interface C
  D = 3,   // Interface D
  E = 4,   // Interface E
  F = 5    // Interface F, advanced interface
};

/**
 * Check if a specific sensor is ready for reading in specific interface.
 * @param sensorType The type of sensor (SensorType enumeration).
 * @param interface The interface code (InterfaceCode enumeration).
 * @return True if the sensor is ready, otherwise false.
 */
bool nm_is_sensor_ready(SensorType sensorType, InterfaceCode interface);

/**
 * Check if a specific sensor is turned on in specific interface.
 * @param sensorType The type of sensor (SensorType enumeration).
 *                  Valid sensor types: Hall, Infrared, Sound, Button.
 * @param interface The interface code (InterfaceCode enumeration).
 * @return True if the sensor is turned on, otherwise false.
 */
bool nm_is_sensor_on(SensorType sensorType, InterfaceCode interface);

/**
 * Get a 16-bit integer value from a specific sensor in specific interface.
 * @param sensorType The type of sensor (SensorType enumeration).
 *                  Valid sensor types: SoftSmall, Ultrasonic, Temperature, Voltage, EMG.
 * @param interface The interface code (InterfaceCode enumeration).
 * @return The 16-bit integer value read from the sensor.
 *         For Ultrasonic: [0-1000] (0.1cm)
 *         For Temperature: [-200-1000] (0.1℃)
 *         For other sensor types, the actual range depends on the sensor.
 */
int16_t nm_get_sensor_int16(SensorType sensorType, InterfaceCode interface);


/**
 * Get the value of a specific RGB component from color sensor in specific interface.
 * @param interface The interface code (InterfaceCode enumeration).
 * @param index The index of the RGB component (0 for Red, 1 for Green, 2 for Blue).
 * @return The RGB component value (0 to 255).
 */
uint8_t nm_get_rgb_value(InterfaceCode interface, uint8_t index);

/**
 * Get an array of RGB component values from color sensor in specific interface.
 * @param interface The interface code (InterfaceCode enumeration).
 * @return Pointer to the array of RGB component values (Red, Green, Blue).
 */
uint8_t* nm_get_rgb_values(InterfaceCode interface);

/**
 * Get the value of a specific index from the large soft sensor.
 * @param no The index of the value to retrieve (1 to 5).
 * @return The value at the specified index from the large soft sensor.
 *         Returns 0 if the index is out of range or if sensor data retrieval fails.
 */
uint8_t getSoftBig(int no);
```

## IR Key

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

* Get the currently pressed IR key code.
* @return The IR key code.
 */
uint8_t nm_get_ir_key();

/**

* Check if a specific IR key is currently pressed.
* @param key The IR key code to check.
* @return True if the key is pressed, otherwise false.
 */
bool nm_is_ir_key_pressed(uint8_t key);
```

## GPIO & AIO

```cpp
/**
 * Enumeration of GPIO levels.
 */
enum class GPIOLevel : uint8_t {
  Low = 0x00,  // Low output level
  High = 0x01, // High output level
};

/**
 * Set the GPIO level for a specific GPIO pin.
 * @param gpioNumber The GPIO pin number [1-15].
 * @param level The desired GPIO level (GPIOLevel enumeration).
 */
void setGPIO(uint8_t gpioNumber, GPIOLevel level);

/**
 * Get the current state of a digital GPIO pin.
 * @param no The GPIO pin number [1-15].
 * @return True if the GPIO pin is in a high state, false if it's in a low state.
 */
bool nm_get_gpio(uint8_t no);

/**
 * Get the analog value from a specific analog input pin.
 * @param no The analog input pin number [1-10].
 * @return The analog value read from the input pin [0-4095].
 */
uint16_t nm_get_aio(uint8_t no);
```
