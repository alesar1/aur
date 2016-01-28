# Maintainer: TingPing <tingping@tingping.se>

pkgname=plex-media-player
pkgver=1.0.3.132
_gitver=16fa0ecc
_webclientver=f9aee64 # Set in CMakeModules/WebClientVariables.cmake
pkgrel=1
pkgdesc='Next generation Plex Desktop Client'
arch=('i686' 'x86_64')
license=('GPL')
url='https://github.com/plexinc/plex-media-player'
depends=('mpv' 'qt5-webengine>=5.6' 'libcec')
makedepends=('cmake')
install='plex-media-player.install'
source=("$pkgname-$pkgver-$_gitver.tar.gz::https://github.com/plexinc/plex-media-player/archive/v${pkgver}-${_gitver}.tar.gz"
        "https://nightlies.plex.tv/directdl/plex-dependencies/plex-web-client-plexmediaplayer/latest/plex-web-client-konvergo-${_webclientver}.cpp.tbz2"
        'plex-media-player.desktop')
noextract=("plex-web-client-konvergo-$_webclientver.cpp.tbz2")
sha256sums=('ec4d7d7b1d00dfb17897af54607987dd37334b4abcb34fb7a6f9d2f8ab9bdf44'
            '05f7a5888166f716b09f31a0e6f720a0ae60226bedd9322b43a8f1b1d0343b4a'
            'b03845b761cc18a88252b72d0c83e439006224660444d9174f53cc577f9498b6')

prepare() {
	cd "$pkgname-$pkgver-$_gitver"

	# All this git version junk fails, just remove it we already have the version
	sed -i 's/include(GetGitRevisionDescription)//
	        s/get_git_head_revision(REFSPEC FULL_GIT_REVISION)//' \
	       CMakeModules/VersionConfiguration.cmake

	# This isn't necessary and fails
	sed -i 's|file(WRITE ${QTROOT}/bin/qt.conf ${QTCONFCONTENT})||' \
	       CMakeModules/QtConfiguration.cmake

	# Use our downloaded copy of web-client
	mkdir -p build/src
	ln -sf {$srcdir,build/src}/plex-web-client-konvergo-${_webclientver}.cpp.tbz2
}

build() {
	cd "$pkgname-$pkgver-$_gitver/build"

	cmake -DCMAKE_INSTALL_PREFIX='/usr' -DCMAKE_BUILD_TYPE='Release' -DCMAKE_SKIP_RPATH=1 \
	      -DFULL_GIT_REVISION="$_gitver" -DQTROOT='/usr' ..
	make
}

package() {
	cd "$pkgname-$pkgver-$_gitver/build"

	DESTDIR="$pkgdir" make install

	install -Dm644 "$srcdir/plex-media-player.desktop" "$pkgdir/usr/share/applications/plex-media-player.desktop"
	install -Dm644 ../resources/images/icon.png "$pkgdir/usr/share/icons/hicolor/256x256/apps/plex-media-player.png"
}
