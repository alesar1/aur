# Maintainer: Matthias Steffen aur@matthiassteffen.biz

pkgname=mailspring-libre
pkgver=1.7.2_libre1
pkgrel=2
pkgdesc="A fork of a fork – aiming at removing Mailspring's dependecy on a central server."
arch=('x86_64')
license=('custom: GPL3 and (C) 2016-2019 Foundry 376, LLC.')
url="https://github.com/notpushkin/Mailspring-Libre"
options=('!strip')

source=()
sha256sums_x86_64=('e16f85c4f2df398976ac70b3139ff698ab2c5caff7ca346eab62d60860d63a84')

source_x86_64=("https://github.com/notpushkin/Mailspring-Libre/releases/download/1.7.8-libre/mailspring-1.7.8-libre-amd64.deb")
depends=("libxss" "libxkbfile" "libsecret" "gtk3" "nss" "libglvnd")

optdepends=('libappindicator-gtk3: for system tray support' "libgnome-keyring: keyrings" "gnome-keyring: keyrings" )
conflicts=('mailspring')

package() {
	cd ${srcdir}

	tar -xvf data.tar.xz -C ${pkgdir} --exclude='./control'

	chmod -R go-w "${pkgdir}"/usr
}
