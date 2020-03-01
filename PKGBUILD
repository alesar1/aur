# Maintainer: Ossi Saukko <osaukko at gmail dot com>
_name=ocp
pkgname=ocp-git
pkgver=0.2.1.r387.fdc6121
pkgrel=1
pkgdesc="Open Cubic Player (GIT Version)"
arch=('i686' 'x86_64')
url="http://stian.cubic.org/project-ocp.php"
license=('GPL')
depends=('hicolor-icon-theme'
         'libxpm'
         'libxxf86vm')
optdepends=('adplug: for OPL formats support'
            'alsa-lib: for ALSA output'
            'flac: for FLAC audio support'
            'libmad: for MPEG audio support'
            'libvorbis: for Vorbis audio support'
            'sdl: for SDL user interface support'
            'sdl2: for SDL2 user interface support')
makedepends=('git'
             'xa')
provides=("${_name}=${pkgver}")
conflicts=("${_name}")
install=$pkgname.install
source=("${_name}::git://github.com/mywave82/opencubicplayer.git")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_name}"
    printf "%s.r%s.%s" "$(grep \^AC_INIT configure.ac|cut -d, -f2|xargs)" \
        "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "${srcdir}/${_name}"
    git submodule init
    git submodule update

    # If both SDL and SDL2 are installed, then disable SDL.
    # Otherwise there are functions with similar names and linking fails.
    CONFIG="--prefix=/usr --sysconfdir=/etc --with-timidity-default-path=/etc/timidity++/"
    if [ -f /usr/include/SDL/SDL.h ] && [ -f /usr/include/SDL2/SDL.h ]
    then
        CONFIG="${CONFIG} --without-sdl"
    fi

    ./configure ${CONFIG}
    make
}

package() {
    cd "${srcdir}/${_name}"
    make DESTDIR="${pkgdir}" install
}
