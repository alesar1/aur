# Author: Justin Jagieniak <justin@jagieniak.net>
# Contributor: Rye Mutt
# Maintainer: Xenhat Hex (me@xenh.at)


pkgname=alchemy-next-viewer
pkgver=6.4.23.47339
pkgrel=1
pkgdesc="This is the next generation of Alchemy Viewer!"
arch=('i686' 'x86_64')
url=https://www.alchemyviewer.org
license=('LGPL')
depends=(dbus-glib glu gtk3 lib32-libidn lib32-libsndfile lib32-util-linux lib32-zlib libgl libidn libjpeg-turbo libpng libxss libxml2 mesa nss openal sdl2 vlc zlib)
optdepends=(
  'alsa-lib: for ALSA support'
  'pepper-flash: for inworld Flash support'
  'freealut: for OpenAL support'
  'lib32-libidn11: for voice support'
  'libpulse: for PulseAudio support'
  'mesa-libgl: For Intel, Radeon, Nouveau support'
  'nvidia-libgl: for NVIDIA support'
  'nvidia-utils: for NVIDIA support')
makedepends=('cmake' 'gcc' 'python-virtualenv' 'python-pip' 'git' 'boost' 'xz' 'ninja')
conflicts=('alchemy')
provides=('alchemy-next')

source=("$pkgname"::'git+https://git.alchemyviewer.org/alchemy/alchemy-next.git' 'alchemy-next.desktop')
md5sums=('SKIP' '6d65e849f37a05b8684d99185feaa07c')

pkgver() {
	cat "$pkgname/build-linux-64/newview/viewer_version.txt"
}

prepare() {
	cd "$pkgname"
	virtualenv ".venv" -p python3
	source ".venv/bin/activate"
	pip3 install --upgrade autobuild -i https://git.alchemyviewer.org/api/v4/projects/54/packages/pypi/simple --extra-index-url https://pypi.org/simple
	autobuild configure -A 64 -c ReleaseOS -- -DLL_TESTS:BOOL=FALSE -DDISABLE_FATAL_WARNINGS=ON -DREVISION_FROM_VCS=ON -DUSE_FMODSTUDIO=OFF
}

build() {
	cd "$pkgname/build-linux-64"
	autobuild build -A 64 -c ReleaseOS --no-configure
}

package() {
	mkdir -p "$pkgdir/opt"
	mkdir -p "$pkgdir/usr/share/applications"

	mv "$pkgname/build-linux-64/newview/packaged" "$pkgdir/opt/alchemy-next"

	install -Dm644 "alchemy-next.desktop" "$pkgdir/usr/share/applications/alchemy-next.desktop"
}
