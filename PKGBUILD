# Maintainer: Det <nimetonmaili g-mail>
# Based on [extra]'s thunderbird

# NOTE: Enable PGO on x86_64?: http://en.wikipedia.org/wiki/Profile-guided_optimization
_pgo=0  # "1" to enable

pkgname=thunderbird-beta
pkgver=52.0b1
_major=${pkgver/rc*}
_build=${pkgver/*rc}
pkgrel=1
pkgdesc="Standalone Mail/News reader - Bleeding edge version with optional PGO"
arch=('i686' 'x86_64')
url="https://www.mozilla.org/thunderbird"
license=('GPL' 'LGPL' 'MPL')
depends=('gtk2' 'mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'alsa-lib' 'libvpx' 'libevent' 'nss' 'hunspell'
         'sqlite' 'ttf-font' 'icu')
makedepends=('unzip' 'zip' 'diffutils' 'python2' 'yasm' 'mesa' 'gconf'
             'libpulse' 'inetutils')
optdepends=('libcanberra: for sound support')
[[ $_pgo = 1 ]] && makedepends+=('imake' 'xorg-server-xvfb')
provides=("thunderbird=$pkgver")
install=$pkgname.install
options=('!emptydirs' '!makeflags')
source=("https://ftp.mozilla.org/pub/thunderbird/releases/$pkgver/source/thunderbird-$pkgver.source.tar.xz"
        'mozconfig'
        'mozconfig-pgo'
        "$pkgname.desktop"
        "$pkgname-safe.desktop"
        'vendor.js')
sha512sums=('992f74b81d47806a2fa2667f9023cba6d75ccf0ef5310a4e4124fce8a317f2633a287fe828c43f90978916e4f199e2778affc8e4e7beab9abdc6dfbd52150d94'
            '8f73124b10eeb0d98d68dece7fd152b771a9aac2f84268dcf82e5473183c75bea9b7ba9db153566ddad0cbf0f006b022d39762576a4303ce4330a8211edabb53'
            '62895299de6b1b55f332bc3c58c7c113640a0bc2e97d3a3800e47c20acd3af54174c1c7a7ab83778944f4e90ff5f15ca17f611d06f74ab9d9dccd3ec365f8f81'
            'fc83c23f67cc5d399bc655d2486936db3ab500bafe399a905a17a0b0f63ad9befb782fc9c07d467a65a80a00e3ce984700ec3cf60e4cb3e1b29b20954c6fa775'
            '3cf4194575041bbe344d6cd17e473eb78caf7e2e1aa8b1309151f7e4677c33571014ba6d7aba267398c3ba69c825c64363272b82b15f7dbb8ae5e3e825f439b7'
            'aeb444784732267f1b1e87e6084a776f82a1912c4c2637d2cf1de1c135dd9d41d2ef66d2bd3f9cbd3a79fad32d17ea6e2968ba644d5f887cb66ba6c09a2098f5')
# RC
if [[ $_build = ? ]]; then
  source[0]="https://ftp.mozilla.org/pub/thunderbird/candidates/$_major-candidates/build$_build/source/thunderbird-$_major.source.tar.xz"
fi

prepare() {
  cd thunderbird-$pkgver

  # Create directories
  msg2 "Creating directory structure..."
  install -d "$pkgdir"/usr/bin
  install -d "$pkgdir"/usr/share/applications
  install -d "$pkgdir"/opt

  # PGO?
  if [[ $CARCH = x86_64 ]] && [[ $_pgo = 1 ]]; then
    cp "$srcdir"/mozconfig-pgo .mozconfig
  else
    cp "$srcdir"/mozconfig .mozconfig
  fi

  # configure script misdetects the preprocessor without an optimization level
  # https://bugs.archlinux.org/task/34644
  sed -i '/ac_cpp=/s/$CPPFLAGS/& -O2/' mozilla/configure
}

build() {
  cd thunderbird-$pkgver

  # Build flags
  export LDFLAGS="$LDFLAGS -Wl,-rpath,/opt/$pkgname"
  export PYTHON="/usr/bin/python2"

  if [[ $CARCH = x86_64 ]] && [[ $_pgo = 1 ]]; then
    # Set up PGO
    msg2 "Running Xvfb.."
    export DISPLAY=:99
    Xvfb -nolisten tcp -extension GLX -screen 0 1280x1024x24 $DISPLAY &

    # Build
    msg2 "Running make.."
    if ! make -f client.mk build MOZ_MAKE_FLAGS="$MAKEFLAGS" MOZ_PGO=1; then
      kill $!
      return 1
    fi

    # Kill leftovers
    kill $! || true
  else
    msg2 "Running make.."
    make -f client.mk build MOZ_MAKE_FLAGS="$MAKEFLAGS"
  fi
}

package() {
  cd thunderbird-$pkgver

  # Create directories
  install -d "$pkgdir"/usr/bin
  install -d "$pkgdir"/usr/share/applications
  install -d "$pkgdir"/opt

  # Put together
  msg2 "Running make install.."
  make -f client.mk DESTDIR="$pkgdir" install

  # Install
  msg2 "Moving stuff in place..."
  cd obj-$CARCH-unknown-linux-gnu/dist
  cp -r thunderbird/ "$pkgdir"/opt/$pkgname
  
  # /usr/bin symlink
  ln -sf /opt/$pkgname/thunderbird "$pkgdir"/usr/bin/$pkgname

  # vendor.js
  install -Dm644 "$srcdir"/vendor.js "$pkgdir"/opt/$pkgname/defaults/preferences/vendor.js

  # Icons
  for i in 16x16 22x22 24x24 32x32 48x48 256x256; do
    install -Dm644 "$srcdir"/thunderbird-$pkgver/other-licenses/branding/thunderbird/mailicon${i/x*}.png \
                   "$pkgdir"/usr/share/icons/hicolor/$i/apps/$pkgname.png
  done

  # Desktop
  install -m644 "$srcdir"/*.desktop "$pkgdir"/usr/share/applications/

  # Dictionaries/hyphenation
  rm -rf "$pkgdir"/opt/$pkgname/{dictionaries,hyphenation}
  ln -sf /usr/share/hunspell "$pkgdir"/opt/$pkgname/dictionaries
  ln -sf /usr/share/hyphen "$pkgdir"/opt/$pkgname/hyphenation
}
