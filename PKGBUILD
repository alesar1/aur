# Maintainer: pappy <pappy _AT_ a s c e l i o n _DOT_ com>
pkgname=virtualbox-ext-oracle-5
pkgver=5.2.26
pkgrel=1
pkgdesc='Oracle VM VirtualBox Extension Pack 5.x'
arch=(any)
url=https://www.virtualbox.org/
license=(custom:PUEL)
options=('!strip')
conflicts=(virtualbox-ext-oracle virtualbox-ext-oracle-5.0)
install=virtualbox-ext-oracle.install
source=("http://download.virtualbox.org/virtualbox/$pkgver/Oracle_VM_VirtualBox_Extension_Pack-$pkgver.vbox-extpack")
noextract=("Oracle_VM_VirtualBox_Extension_Pack-$pkgver.vbox-extpack")
sha256sums=('4b7caa9b722840d49f154c3e5efb6463b1b7129f09973a25813dfdbccd9debb7')

prepare() {
	# shrink uneeded cpuarch
	[[ -d shrunk ]] || mkdir shrunk
	tar xfC "Oracle_VM_VirtualBox_Extension_Pack-$pkgver.vbox-extpack" shrunk
	rm -r shrunk/{darwin*,solaris*,win*}
	tar -c --gzip --file shrunk.vbox-extpack -C shrunk .
}

package() {
	depends=('virtualbox')
	optdepends=('rdesktop: client to connect vm via RDP')
	install -Dm 644 shrunk.vbox-extpack \
		"$pkgdir/usr/share/virtualbox/extensions/Oracle_VM_VirtualBox_Extension_Pack-$pkgver.vbox-extpack"
	install -Dm 644 shrunk/ExtPack-license.txt \
		"$pkgdir/usr/share/licenses/$pkgname/PUEL"
}

