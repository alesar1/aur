# Maintainer: Jan Cholasta <grubber at grubber cz>

_name=gzdoom
pkgname=${_name}-git
pkgver=3.0pre+144+gc6a516089
pkgrel=1
pkgdesc='Advanced Doom source port with OpenGL support  (git version)'
arch=('i686' 'x86_64')
url='http://www.zdoom.org/'
license=('BSD' 'custom:dumb' 'GPL3' 'LGPL3')
depends=('hicolor-icon-theme'
         'libgl'
         'libjpeg'
         'libgme'
         'sdl2')
makedepends=('cmake'
             'desktop-file-utils'
             'fluidsynth'
             'git'
             'gtk3')
optdepends=('blasphemer-wad: Blasphemer (free Heretic) game data'
            'chexquest3-wad: Chex Quest 3 game data'
            'doom1-wad: Doom shareware game data'
            'fluidsynth: FluidSynth MIDI device'
            'freedm: FreeDM game data'
            'freedoom1: Freedoom: Phase 1 game data'
            'freedoom2: Freedoom: Phase 2 game data'
            'gtk3: IWAD selection dialog'
            'gxmessage: crash dialog (GNOME)'
            'hacx-wad: HacX game data'
            'harmony-wad: Harmony game data'
            'heretic1-wad: Heretic shareware game data'
            'hexen1-wad: Hexen demo game data'
            'kdialog: crash dialog (KDE)'
            'libsndfile: WAV/FLAC/OGG audio support'
            'mpg123: MP3 audio support'
            'openal: in-game sound'
            'strife0-wad: Strife shareware game data'
            'square1-wad: The Adventures of Square, Episode 1 game data'
            'timidity++: Timidity MIDI device'
            'urbanbrawl-wad: Urban Brawl: Action Doom 2 game data'
            'xorg-xmessage: crash dialog (other)')
provides=("${_name}")
conflicts=("${_name}")
source=("${_name}::git://github.com/coelckers/${_name}.git"
        "${_name}.desktop")
sha256sums=('SKIP'
            '59122e670f72aa2531aff370e7aaab2d886a7642e79e91f27a533d3b4cad4f6d')

pkgver() {
    cd $_name

    git describe --tags --match '[Gg]*' | sed -r 's/^[Gg]//;s/-/+/g'
}

build() {
    cd $_name

    cmake -DCMAKE_BUILD_TYPE=Release \
          -DCMAKE_C_FLAGS="$CFLAGS -DSHARE_DIR=\\\"/usr/share/$_name\\\"" \
          -DCMAKE_CXX_FLAGS="$CXXFLAGS -DSHARE_DIR=\\\"/usr/share/$_name\\\"" \
          -DCMAKE_EXE_LINKER_FLAGS="$LDFLAGS -Wl,-z,noexecstack" \
          -DCMAKE_INSTALL_PREFIX=/usr \
          -DINSTALL_PATH=bin \
          -DINSTALL_PK3_PATH=share/$_name \
          .
    make
}

package() {
    cd $_name

    make install DESTDIR="$pkgdir"

    desktop-file-install --dir="$pkgdir"/usr/share/applications \
                         "$srcdir"/${_name}.desktop
    install -D -m644 src/posix/zdoom.xpm \
            "$pkgdir"/usr/share/icons/hicolor/48x48/apps/${_name}.xpm

    install -d "$pkgdir"/usr/share/licenses
    ln -s /usr/share/doc/$_name/licenses "$pkgdir"/usr/share/licenses/$pkgname
}
