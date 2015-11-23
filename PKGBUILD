pkgname=leleleplayer-git
_gitname=leleleplayer
pkgver=0.5.2
pkgrel=8
pkgdesc="An audio player wich can find similar songs in your library"
arch=('i686' 'x86_64')
license=('MIT')
depends=('gstreamer' 'gst-plugins-base' 'gst-plugins-good' 'gst-plugins-bad' 'ffmpeg' 'gtk3' 'bliss-git')
optdepends=('gst-plugins-ugly: Needed for some audio format support')
install="$_gitname.install"
source=('git://github.com/Polochon-street/leleleplayer.git')
md5sums=('SKIP')
 
prepare() {
	cd "$srcdir/$_gitname"
	mkdir -p build
}

build() {
        cd "$srcdir/$_gitname/build"
        cmake .. -DCMAKE_BUILD_TYPE=Release
        make
}
 
package() {
        cd "$srcdir/$_gitname/build"
        make DESTDIR="$pkgdir" install 
} 
