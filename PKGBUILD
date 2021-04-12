# Maintainer: Ruben Gees <rubengees7@gmail.com>

pkgname=mqtt-cli-bin
pkgver=4.5.2
pkgrel=1
pkgdesc="MQTT 5.0 and 3.1.1 compatible and feature-rich MQTT Command Line Interface."
arch=('x86_64')
url="https://hivemq.github.io/mqtt-cli"
license=('Apache')
depends=('bash' 'java-runtime>=1.8')
source=('https://github.com/hivemq/mqtt-cli/releases/download/v4.5.2/mqtt-cli-4.5.2.deb')
md5sums=('4511ff76acef4f998d425a6cfe172103')

package() {
	tar -zxf data.tar.gz -C "${pkgdir}"
}
