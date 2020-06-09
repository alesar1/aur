# Mantainer: sgar < swhaat at github >

pkgbase=esphomeyaml
pkgname=esphome
pkgver=1.14.4
pkgrel=2
pkgdesc="Solution for your ESP8266/ESP32 projects with Home Assistant"
url="https://github.com/esphome/ESPHome"
depends=('python-setuptools'
	'python-voluptuous'
	'python-yaml'
	'python-paho-mqtt'
	'python-colorlog'
	'python-tornado'
	'python-protobuf'
	'python-tzlocal'
	'python-pyserial'
	'python-ifaddr'
	'python-pyaes'
	'python-ecdsa'
	'platformio'
	'esptool')
license=('MIT')
arch=('any')
replaces=('esphomeyaml')
source=("https://github.com/esphome/ESPHome/archive/v${pkgver}.tar.gz"
	"requirements.patch")
sha256sums=('78c78c3a5172c0885ebf0fc802c309b7bcdf5f051ec60b727fda1dcd3076aa5c'
            'ab711b1e1ad83cf3415d1d925a4b17500b48bcf0d16ba25c7998d6cd70c6acc7')

prepare() {
    cd "$srcdir/${pkgname}-${pkgver}"
    patch --forward --strip=1 --input="${srcdir}/requirements.patch"
}

build() {
    cd "$srcdir/${pkgname}-${pkgver}"
    python setup.py build
}

package() {
    cd "$srcdir/${pkgname}-${pkgver}"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}

check() {
    cd "$srcdir/${pkgname}-${pkgver}"

##	 Run tests, takes a while
    cp ${pkgname}/__main__.py ${pkgname}.py
#    python esphome.py tests/test1.yaml compile
#    python esphome.py tests/test2.yaml compile
}

