# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# The following guidelines are specific to BZR, GIT, HG and SVN packages.
# Other VCS sources are not natively supported by makepkg yet.

# Maintainer: Demir Yerli <mrquantumoff@protonmail.com>
pkgname=quartzctl
pkgver=v0.1.0
pkgrel=1
pkgdesc="libquartz based apps control utility"
arch=(x86_64)
url="https://github.com/Bultek/quartzctl"
license=('BSD-2-Clause')
groups=("mrquantumoff")
depends=("openssl")
makedepends=('git' 'cargo' 'rust')
replaces=()
backup=()
options=()
source=(git+https://github.com/Bultek/quartzctl.git)
md5sums=('SKIP')


prepare() {
	cd "$srcdir/quartzctl"
}

build() {
	cd ${srcdir}/quartzctl
	cargo build -r
	
}

package() {
	cd "$srcdir/quartzctl"
	install -Dm755 -t "${pkgdir}/usr/bin/" target/release/quartzctl 
	chmod +x ${pkgdir}/usr/bin/quartzctl
}
