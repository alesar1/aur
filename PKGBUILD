# Maintainer: Justin Jagieniak <justin@jagieniak.net>
# Contributor: Nicky D

pkgname=firestorm
pkgver=r57615.0af2879f89e3
pkgrel=1
pkgdesc="Firestorm is FOSS where you can build & share virtual reality (VR) in Secondlife/OpenSim (P2P). Meet people in 3D! Source build."
arch=('i686' 'x86_64')
url=https://hg.phoenixviewer.com/
license=('LGPL')
depends=(dbus-glib gconf glu gtk2 lib32-libidn lib32-libsndfile lib32-util-linux lib32-zlib libgl libidn libjpeg-turbo libpng libxss libxml2 mesa nss openal sdl vlc zlib)
optdepends=(
  'alsa-lib: for ALSA support'
  'pepper-flash: for inworld Flash support'
  'freealut: for OpenAL support'
  'gstreamer: For video support - may need good, bad and ugly plugins'
  'lib32-libidn11: for voice support'
  'libpulse: for PulseAudio support'
  'mesa-libgl: For Intel, Radeon, Nouveau support'
  'nvidia-libgl: for NVIDIA support'
  'nvidia-utils: for NVIDIA support')
makedepends=('cmake' 'gcc' 'python2-virtualenv' 'python2-pip' 'mercurial')
conflicts=('firestorm-bin' 'firestorm-beta')
provides=('firestorm')

source=("$pkgname"::'hg+http://hg.phoenixviewer.com/phoenix-firestorm-release' 'autovars' 'firestorm.desktop' 'firestorm.launcher')
md5sums=('SKIP' '7245883fbdba303d4f827f60907574c6' '2158007ce43b17b72a5517fb5aeb6e66' '3daa9e24492337e62bcac318df4ab370')

pkgver() {
	cd "$pkgname"
	printf "r%s.%s" "$(hg identify -n)" "$(hg identify -i)"
}

prepare() {
	virtualenv2 "$pkgname"
	export AUTOBUILD_VARIABLES_FILE="$srcdir/autovars"

	cd "$pkgname"
	source bin/activate
	pip install --upgrade autobuild

	autobuild configure -A 64 -c ReleaseFS_open -- -DLL_TESTS:BOOL=FALSE
}

build() {
    export AUTOBUILD_VARIABLES_FILE="$srcdir/autovars"
    cd "$pkgname"
    source bin/activate
    
    autobuild build -A 64 -c ReleaseFS_open
}

package() {
    mkdir -p "$pkgdir/opt"
    mkdir -p "$pkgdir/usr/share/applications"
    
    mv "$pkgname/build-linux-x86_64/newview/packaged" "$pkgdir/opt/firestorm"
    
    install -Dm644 "firestorm.desktop" "$pkgdir/usr/share/applications/firestorm.desktop"
    install -Dm755 "firestorm.launcher" "$pkgdir/usr/bin/firestorm"
}

