# Maintainer: Baptiste Jonglez <baptiste--aur at jonglez dot org>
pkgname=ring-daemon
pkgver=2.1.0.r525.g56ec56f
pkgrel=1
epoch=1
pkgdesc="A secure and distributed voice, video and chat communication platform that requires no centralized server and leaves the power of privacy in the hands of the user (formerly known as SFLphone)"
arch=("i686" "x86_64")
url="http://ring.cx"
license=('GPL3')
groups=("ring")
depends=('opendht' 'yaml-cpp' 'alsa-lib' 'libpulse' 'jack'
         'libsamplerate' 'libsndfile' 'dbus-c++' 'ffmpeg' 'udev' 'gnutls'
         'expat' 'gsm' 'speex' 'speexdsp' 'opus' 'libupnp' 'libsrtp')
makedepends=('git' 'boost' 'msgpack-c')
source=("git+https://gerrit-ring.savoirfairelinux.com/ring-daemon#commit=56ec56f7f78e31db464d4631df51f62c4212d7e2")
md5sums=('SKIP')

pkgver() {
  cd "${pkgname}"
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${pkgname}"

  msg2 'Building pjproject...'
  # Build the customised version of pjproject (heavily patched...)
  mkdir -p contrib/native
  cd contrib/native
  ../bootstrap
  make .pjproject

  cd ../..
  msg2 'Building...'
  # Build dring
  ./autogen.sh
  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --libexecdir=/usr/bin \
    --sysconfdir=/etc \
    --enable-ipv6
  make
}

package() {
  cd "${pkgname}"

  msg2 'Installing...'
  make DESTDIR="$pkgdir" install

  msg2 'Cleaning up pkgdir...'
  find "$pkgdir" -type d -name .git -exec rm -r '{}' +
  find "$pkgdir" -type f -name .gitignore -exec rm -r '{}' +
}

# vim:set ts=2 sw=2 et:
