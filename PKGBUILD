# Maintainer: Markus Richter <mqus at disroot dot org>
# Contributor: Timothée Ravier <tim@siosm.fr

pkgname=earthwalker-git
_pkgbase=earthwalker
pkgver=r272.c4b7337
pkgrel=2
pkgdesc="A selfhosted browsergame in which you find out where you are by navigating StreetView."
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="https://gitlab.com/glatteis/earthwalker"
license=('GPL3')
depends=()
makedepends=('go' 'git' 'npm')
provides=("$_pkgbase") 
optdepends=()
conflicts=("${_pkgbase}")
backup=("etc/${_pkgbase}/config.toml")
install=earthwalker.install
source=('git+https://gitlab.com/glatteis/earthwalker.git'
	"${_pkgbase}.install"
	"${_pkgbase}.service"
	"${_pkgbase}.sysusers.conf"
	"${_pkgbase}.tmpfiles.conf"
	"0001-Adapt-Config.patch")
sha512sums=('SKIP'
            '484d5b10b83202dcf0bc0b0717c637f806f1a457d54dd78185ad56316cfbef49ab16338d15994cde1923b1f31cfcac6d7b7b66e15051c3f59fa85f3df9c6daab'
            '754aaed7d7e039a45266a217376607fe54f7e2fefaaeef6c4d604572bd45147947ba607b0d71cb5f5c7ab02fea682c45838edeff2b6fff6565da94511cd063b7'
            '03823fd28e00034932e6f30912f93f6c58cf5897a99bc4c9b96cda73bb17e0391c9a3937ef587ddd9bac54581f9337f86046b0ce29af3702444f162baca33439'
            'c2ddeba33f565ffa2a78ffedfaacb5e0ed8030c67c2f45e3286261b7e005739d3c4cd16ce5e59c46c9eba14f514270ccae343c4879d11f57d418cb596a9a8e1e'
            'bb357c1c64d6451fe9eb93c946ade46d174108fdbe04b79b89ac5116accef11ab332349b7f4329887efa2a73620dbf8c5b0cc4288ab08aa16b0740d82a6f76b4')


pkgver() {
	cd "$srcdir/$_pkgbase"
	( set -o pipefail
	    git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
	    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

build() {
	cd "$srcdir/$_pkgbase"
	patch -N -p1 -i "$srcdir/0001-Adapt-Config.patch"
	make
}

check() {
	cd "$srcdir/$_pkgbase"
	go test ./...	
}

package() {
	# setup systemd service
	install -D -m 0644 "$srcdir/${_pkgbase}.service" "$pkgdir/usr/lib/systemd/system/${_pkgbase}.service"

	# declarative setup of user and directory
	install -D -m 0644 "$srcdir/${_pkgbase}.sysusers.conf" "$pkgdir/usr/lib/sysusers.d/${_pkgbase}.conf"
	install -D -m 0644 "$srcdir/${_pkgbase}.tmpfiles.conf" "$pkgdir/usr/lib/tmpfiles.d/${_pkgbase}.conf"
	
	# copy default config files
	#install -D -m 0644 "$srcdir/${_pkgbase}.env" "$pkgdir/etc/${_pkgbase}/${_pkgbase}.env"
	install -D -m 0644 "$srcdir/$_pkgbase/config.toml.sample" "$pkgdir/etc/${_pkgbase}/config.toml"

	# copy application data
	install -d "$pkgdir/usr/share/${_pkgbase}"
	cp -r "$srcdir/${_pkgbase}/public" "$pkgdir/usr/share/${_pkgbase}"
#	cp -r "$srcdir/${_pkgbase}/static" "$pkgdir/usr/share/${_pkgbase}"
#	cp -r "$srcdir/${_pkgbase}/templates" "$pkgdir/usr/share/${_pkgbase}"
	
	# copy binary
	install -D -m 0755 "$srcdir/$_pkgbase/${_pkgbase}" "$pkgdir/usr/bin/${_pkgbase}"
}
