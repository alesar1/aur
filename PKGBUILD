# Maintainer: Radioactiveman <thomas-lange2@gmx.de>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Alexander Fehr <pizzapunk gmail com>
# Contributor: William Rea <sillywilly@gmail.com>

_pkgname=audacious-plugins
pkgname="$_pkgname-git"
pkgver=4.0.beta1.r160.g89b6ab575
pkgrel=1
epoch=1
pkgdesc="Plugins for Audacious (git version)"
arch=('i686' 'x86_64')
url="https://audacious-media-player.org/"
license=('BSD' 'GPL')
provides=("$_pkgname")
conflicts=("$_pkgname")
depends=('audacious-git'
         'alsa-lib' 'curl' 'dbus-glib' 'faad2' 'ffmpeg' 'flac' 'fluidsynth'
         'jack' 'lame' 'libcdio-paranoia' 'libcue' 'libmms' 'libmodplug'
         'libmtp' 'libnotify' 'libsamplerate' 'libsidplayfp' 'libvorbis'
         'lirc' 'mpg123' 'neon' 'pulseaudio' 'wavpack')
makedepends=('glib2' 'python' 'git')
source=("git://github.com/audacious-media-player/$_pkgname.git")
sha256sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  git describe --long --tags | sed 's/^audacious-plugins-//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$_pkgname"

  autoreconf -I m4
  ./configure \
    --prefix=/usr \
  # --enable-gtk \

  make
}

package() {
  cd "$_pkgname"
  make DESTDIR="$pkgdir" install
  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}
