# Maintainer: Daniel Wilhelm <concat(shield, wed) @ outlook.com>

pkgname=wwphone
pkgver=3.2.8
pkgrel=1
pkgdesc="A proprietary CTI and SIP client from wwcom"
arch=('x86_64')
license=('custom:"Copyright (c) 2020 by wwcom ag"')
url="https://www.wwcom.ch/"

source=("https://wwcom.ch/downloads/wwphone_${pkgver//./_}.deb")
sha256sums=('196c9a02060d3a3404bef57d28cae65de7a9d228fc4629f7e53f2c816ffa537e')

depends=(
	"alsa-lib"
	"hidapi"
	"libxss"
        "gtk2"
	)


package() {
	cd "${srcdir}"

	tar -xvf data.tar.xz

	install -d "${pkgdir}"/opt/wwphone/certs
	install -m 0644 opt/wwphone/certs/* "${pkgdir}"/opt/wwphone/certs
	install -m 0644 opt/wwphone/{*.wav,wwphone.png} "${pkgdir}"/opt/wwphone
	install -m 0755 opt/wwphone/wwphone.bin "${pkgdir}"/opt/wwphone/wwphone.bin
	install -d "${pkgdir}"/opt/wwphone/locale
	install -m 0644 opt/wwphone/locale/* "${pkgdir}"/opt/wwphone/locale

	install -Dm 0644 opt/wwphone/license.txt "${pkgdir}"/usr/share/licenses/$pkgname/license.txt
	install -Dm 0755 usr/local/bin/wwphone "${pkgdir}"/usr/bin/wwphone
	install -Dm 0644 usr/share/applications/wwphone.desktop \
	 	"${pkgdir}"/usr/share/applications/wwphone.desktop
	sed -e 's|/usr/local/bin|/usr/bin|' -i "${pkgdir}"/usr/share/applications/wwphone.desktop
	sed -e 's|Exec=/usr/bin/wwphone|Exec=/usr/bin/wwphone %u|' -i "${pkgdir}"/usr/share/applications/wwphone.desktop
	sed -e '$aMimeType=x-scheme-handler/tel;' -i "${pkgdir}"/usr/share/applications/wwphone.desktop
}
