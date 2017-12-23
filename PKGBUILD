# Maintainer: liushuyu
# Contributor: Xyne
# Contributor: Scott Garrett <Wintervenom@archlinux.us>
# Contributor: Thomas Dziedzic

_pkgname=lmms
pkgname=lmms-qt5-git
pkgver=1.2.0.rc5.r1.g20fc0ad2d
pkgrel=1
pkgdesc='The Linux MultiMedia Studio (Qt5 Version).'
url='http://lmms.io'
arch=('i686' 'x86_64')
license=('GPL')
depends=('qt5-base' 'libsamplerate' 'fluidsynth' 'zynaddsubfx' 'libxft' 
'libxinerama' 'shared-mime-info' 'alsa-lib')
optdepends=('wine: Windows VST support (experimental)'
            'fftw: SpectrumAnalyzer plugin'
            'jack: Optional JACK audio backend'
            'portaudio: Optional Portaudio audio backend'
            'sdl_sound: Optional SDL audio backend'
            'pulseaudio: Optional PulseAudio backend'
            'oss: Optional OSS backend'
            'libsoundio: For soundio support'
            'lame: For exporting MP3 format')
makedepends=('qt5-tools' 'git' 'cmake' 'ninja' 'ladspa' 'raptor' 'rasqal' 'libxft' 'freetype2' 'redland' 'gcc-multilib' 'lame' 'perl-list-moreutils')
options=('!strip')
provides=('lmms')
conflicts=('lmms' 'lmms-git')
source=('git+https://github.com/LMMS/lmms.git#branch=stable-1.2')
sha512sums=('SKIP')

pkgver() {
  cd -- "$srcdir/$_pkgname"
  git describe --long --tags | sed -r 's/^v//;s/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
  cd -- "$srcdir/$_pkgname"
  git submodule update --init --recursive
  git shortlog -nse | cut -f 2- > doc/CONTRIBUTORS
}

build() {
  cd -- "$srcdir/$_pkgname"
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DWANT_QT5=ON -DCMAKE_BUILD_TYPE=RelWithDebInfo -GNinja -DWANT_WEAKJACK=OFF
  ninja
}

package() {
  cd "$srcdir/$_pkgname"
  DESTDIR="$pkgdir" ninja install
}

# vim:set ts=2 sw=2 et:
