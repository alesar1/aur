# Maintainer: Josep Mengual <josep at truita dot es>

pkgname=newleaf
_repo=NewLeaf
desc="NewLeaf is a YouTube data extractor, compatible with the Invidious API."
pkgver=r119.714f103
pkgrel=1
arch=('x86_64')
url="https://sr.ht/~cadence/tube/"
license=('AGPL3')
makedepends=(git)
depends=(python python-cherrypy yt-dlp python-cachetools python-dateutil python-requests)
provides=('newleaf')
conflicts=('newleaf')
source=("git+https://git.sr.ht/~cadence/$_repo"
	'newleaf'
)
sha256sums=('SKIP'
	    '32fd2e6be6a10aab9a304814ae5205cb6c88994e7df716f7211406cd822caf6c'
)
install=post.install

pkgver() {
    cd "$_name"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    install -Dm755 newleaf "$pkgdir/usr/bin/newleaf"
    cd "$_name"
    mv configuration.sample.py configuration.py
    mkdir -p "$pkgdir/opt/newleaf"
    cp -r * "$pkgdir/opt/newleaf"
}
