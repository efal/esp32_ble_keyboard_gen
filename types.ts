export interface HidKey {
  name: string;
  code: string; // Hex string e.g., "0x28"
  description?: string;
}

export interface ButtonModifiers {
  ctrl: boolean;
  shift: boolean;
  alt: boolean;
  gui: boolean;
}

export type ButtonMode = 'key' | 'text';

export interface ActionConfig {
  mode: ButtonMode;
  keyConfig: HidKey;
  modifiers: ButtonModifiers;
  text: string;
}

export interface ButtonMapping {
  id: string;
  pin: number;
  longPressEnabled: boolean;
  shortPress: ActionConfig;
  longPress: ActionConfig;
}

export interface DeviceConfig {
  name: string;
  manufacturer: string;
  debounceTime: number;
  deepSleepEnabled: boolean;
  sleepTimeout: number; // in microseconds
  longPressDuration: number; // in milliseconds
}
