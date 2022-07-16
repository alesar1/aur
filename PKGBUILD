# Maintainer: Aakash Sharma <aakashsensharma@gmail.com>
# Contributor: Sergey A. <murlakatamenka@disroot.org>
# Contributor: rv178 <idliyout@gmail.com>

_pkgname="swhkd"
pkgname="${_pkgname}-git"
pkgver=.543.gf6ea9d6
pkgrel=1
arch=("x86_64")
url="https://github.com/waycrate/swhkd"
pkgdesc="A display server independent hotkey daemon inspired by sxhkd."
license=("BSD")
depends=("polkit")
makedepends=("rustup" "make" "git" "scdoc")
conflicts=("swhkd-musl-git")
source=("${_pkgname}::git+${url}.git")
sha256sums=("SKIP")

build(){
	cd "$_pkgname"
	scdoc < ./docs/swhkd.1.scd > ./docs/swhkd.1.gz
	scdoc < ./docs/swhks.1.scd > ./docs/swhks.1.gz
	scdoc < ./docs/swhkd.5.scd > ./docs/swhkd.5.gz
	scdoc < ./docs/swhkd-keys.5.scd > ./docs/swhkd-keys.5.gz
	make setup
	make
}

package() {
	cd "$_pkgname"
	install -Dm 755 ./target/release/swhkd "$pkgdir/usr/bin/swhkd"
	install -Dm 755 ./target/release/swhks "$pkgdir/usr/bin/swhks"

	install -Dm 644 -o root ./com.github.swhkd.pkexec.policy -t "$pkgdir/usr/share/polkit-1/actions"
	install -Dm 644 ./docs/*.1.gz -t "$pkgdir/usr/share/man/man1/"
	install -Dm 644 ./docs/*.5.gz -t "$pkgdir/usr/share/man/man5/"
}

pkgver() {
	cd $_pkgname
	echo "$(grep "^version =" Cargo.toml|head -n1|cut -d\" -f2|cut -d\- -f1).$(git rev-list --count HEAD).g$(git rev-parse --short HEAD)"
}
