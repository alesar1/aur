#Maintainer: Onishin <onishin at onishin dot org>
pkgname='bitmonero-git'
_gitname='bitmonero'
pkgver=0.8.8.7
pkgrel=1
arch=('x86_64')
url="https://getmonero.org/"
license=('custom:Cryptonote')

depends=('boost-libs>=1.45'  'unbound>=1.4.16'  'miniupnpc>=1.6' 'db')
makedepends=('git' 'cmake' 'boost')


pkgdesc="Peer-to-peer network based anonymous digital currency (includes deaemon, wallet and miner)"
provides=('bitmonerod' 'simplewallet' 'simpleminer')
conflicts=('bitmonerod' 'simplewallet' 'simpleminer')
source=("$_gitname::git+https://github.com/monero-project/bitmonero.git")
	
md5sums=('SKIP'
	)

pkgver() {
	cd "$srcdir/$_gitname"
	printf 'r%s.%s' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "${_gitname}"
	cd "$srcdir/$_gitname"

	# and make        
	make release
}


package() {

	# install bitmonerod daemon
	install -D -m755 "$srcdir/$_gitname/build/release/bin/bitmonerod" "$pkgdir/usr/bin/bitmonerod"

	# install simplewallet
        install -D -m755 "$srcdir/$_gitname/build/release/bin/simplewallet" "$pkgdir/usr/bin/simplewallet"

        # install simpleminer
        install -D -m755 "$srcdir/$_gitname/build/release/bin/simplewallet" "$pkgdir/usr/bin/simpleminer"

	# install license when pull request accepted
	#install -D -m644 "$srcdir/$_gitname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
