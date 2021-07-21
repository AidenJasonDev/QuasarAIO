package main

// Imports

import (
	"fmt"
	"log"
	"net"
	"strings"
	//"time"
)

// Variables & Helper Functions

var site string = "footlocker"

var sku string = "622100"

var monDelay int = 6666
var errDelay int = 5555
var resDelay int = 5555

var size string = "XL"
var sizelist = strings.Split(size, " ")

func GetOutboundIP() net.IP {
	conn, err := net.Dial("udp", "8.8.8.8:80")
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	localAddr := conn.LocalAddr().(*net.UDPAddr)

	//fmt.Println(localAddr.IP)
	return localAddr.IP

}

var rawProxy string = "basic.maskedproxy.xyz:31112:maskedt18tc0iis4:Z7qG7fGlkllX0h7Q_country-UnitedStates_session-wuc4NzEd"
var finePoxy bool

func getProxy() {
	if rawProxy == "" {
		GetOutboundIP()

		finePoxy = false
		rawProxy = "localhost"
		fmt.Println(rawProxy)

	} else {
		proxyList := strings.Split(rawProxy, ":")
		proxyHost := proxyList[0]
		proxyPart := proxyList[1]
		proxyUser := proxyList[2]
		proxyPass := proxyList[3]

		fmt.Println(proxyHost)
		fmt.Println(proxyPart)
		fmt.Println(proxyUser)
		fmt.Println(proxyPass)
	}
}

type userProfiles struct {
	Profiles struct {
		Main struct {
			Name           string `json:"name"`
			FirstName      string `json:"firstName"`
			LastName       string `json:"lastName"`
			Email          string `json:"Email"`
			Phone          string `json:"Phone"`
			Address        string `json:"Address"`
			Apt            string `json:"Apt"`
			City           string `json:"City"`
			Zip            string `json:"Zip"`
			State          string `json:"State"`
			Country        string `json:"Country"`
			SameBilling    bool   `json:"sameBilling"`
			BillingAddress string `json:"billingAddress"`
			BillingApt     string `json:"billingApt"`
			BillingCity    string `json:"billingCity"`
			BillingZip     string `json:"billingZip"`
			BillingState   string `json:"billingState"`
			BillingCountry string `json:"billingCountry"`
			CardNumber     string `json:"cardNumber"`
			ExpiryMonth    string `json:"expiryMonth"`
			ExpiryYear     string `json:"expiryYear"`
			Csc            string `json:"Csc"`
		} `json:"Main"`
	} `json:"profiles"`
}

// Main Fuction

func main() {
	getProxy()
}
