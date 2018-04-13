package config

import (
	"github.com/spf13/viper"
)

var (
	AppPort int
)

func LoadConfigFromEnv() {
	// Set default value for viper variable
	viper.SetDefault("APP_PORT", 8080)
	viper.AutomaticEnv()

	// Assign env variables value to global variables
	AppPort = viper.GetInt("APP_PORT")
}
