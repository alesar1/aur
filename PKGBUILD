# $Id$
# Maintainer: Giancarlo Razzolini <grazzolini@gmail.com>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Jan "heftig" Steffens <jan.steffens@gmail.com>
# Contributor: Eduardo Romero <eduardo@archlinux.org>
# Contributor: Giovanni Scafora <giovanni@archlinux.org>

pkgname=wine-staging-ivb
pkgver=1.9.1
pkgrel=1

_pkgbasever=${pkgver/rc/-rc}

source=("https://github.com/wine-compholio/wine-patched/archive/staging-$_pkgbasever.tar.gz"
        30-win32-aliases.conf
        patch-1.9.1-ivb.patch
        patch_temp_constants.patch)
sha512sums=('3d999c7f025764aed1ee300c5f81f7638a55f0dd9c4b764d2ffcbb04970d9232c94e0658b5cd20dfa729d35e0a09e8da9f92523412c2ef5706ab08744e0743af'
            '6e54ece7ec7022b3c9d94ad64bdf1017338da16c618966e8baf398e6f18f80f7b0576edf1d1da47ed77b96d577e4cbb2bb0156b0b11c183a0accf22654b0a2bb'
            'c2966299f0c3f4605e8dcf39e3c840b0a5b654ef48a85fd2506b11a4ce17710e9543efcba3b990174b72e3b4ae2a95226ab33a4a58d17eed8a7de599e6df8489'
            '83583553d8db60e671679adcddedb87a2f8a740d36e5cdffef4a0cf2b995e48be216e53a7d1ee3bbeafd5bf9d0938b4c32b42265620c8e7c5bba967da893be11')

pkgdesc="A compatibility layer for running Windows programs - Staging branch: indexed vertex blending - https://bugs.winehq.org/show_bug.cgi?id=39057"
url="http://www.wine-staging.com"
arch=(i686 x86_64)
options=(staticlibs)
license=(LGPL)
install=wine.install

_depends=(
  attr            lib32-attr
  fontconfig      lib32-fontconfig
  lcms2           lib32-lcms2
  libxml2         lib32-libxml2
  libxcursor      lib32-libxcursor
  libxrandr       lib32-libxrandr
  libxdamage      lib32-libxdamage
  libxi           lib32-libxi
  gettext         lib32-gettext
  freetype2       lib32-freetype2
  glu             lib32-glu
  libsm           lib32-libsm
  gcc-libs        lib32-gcc-libs
  libpcap         lib32-libpcap
  desktop-file-utils
)

makedepends=(autoconf ncurses bison perl fontforge flex
  'gcc>=4.5.0-2'  'gcc-multilib>=4.5.0-2'
  giflib          lib32-giflib
  libpng          lib32-libpng
  gnutls          lib32-gnutls
  libxinerama     lib32-libxinerama
  libxcomposite   lib32-libxcomposite
  libxmu          lib32-libxmu
  libxxf86vm      lib32-libxxf86vm
  libldap         lib32-libldap
  mpg123          lib32-mpg123
  openal          lib32-openal
  v4l-utils       lib32-v4l-utils
  alsa-lib        lib32-alsa-lib
  libxcomposite   lib32-libxcomposite
  mesa            lib32-mesa
  mesa-libgl      lib32-mesa-libgl
  libcl           lib32-libcl
  libxslt         lib32-libxslt
  libpulse        lib32-libpulse
  libva           lib32-libva
  gtk3            lib32-gtk3
  samba
  opencl-headers
)
  
optdepends=(
  giflib          lib32-giflib
  libpng          lib32-libpng
  libldap         lib32-libldap
  gnutls          lib32-gnutls
  mpg123          lib32-mpg123
  openal          lib32-openal
  v4l-utils       lib32-v4l-utils
  libpulse        lib32-libpulse
  alsa-plugins    lib32-alsa-plugins
  alsa-lib        lib32-alsa-lib
  libjpeg-turbo   lib32-libjpeg-turbo
  libxcomposite   lib32-libxcomposite
  libxinerama     lib32-libxinerama
  ncurses         lib32-ncurses
  libcl           lib32-libcl
  libxslt         lib32-libxslt
  libva           lib32-libva
  gtk3            lib32-gtk3
  cups
  samba           dosbox
)

if [[ $CARCH == i686 ]]; then
  # Strip lib32 etc. on i686
  _depends=(${_depends[@]/*32-*/})
  makedepends=(${makedepends[@]/*32-*/} ${_depends[@]})
  makedepends=(${makedepends[@]/*-multilib*/})
  optdepends=(${optdepends[@]/*32-*/})
  provides=("wine=$pkgver")
  conflicts=('wine' 'wine-ivb')
else
  makedepends=(${makedepends[@]} ${_depends[@]})
  provides=("wine=$pkgver" "wine-wow64=$pkgver")
  conflicts=('wine' 'wine-ivb' 'wine-staging' 'wine-wow64')
fi

prepare() {
  # Allow ccache to work
  mv wine-patched-staging-$_pkgbasever $pkgname

  sed 's|OpenCL/opencl.h|CL/opencl.h|g' -i $pkgname/configure*

  # These additional CPPFLAGS solve FS#27662 and FS#34195
  export CPPFLAGS="${CPPFLAGS/-D_FORTIFY_SOURCE=2/} -D_FORTIFY_SOURCE=0"

  # Get rid of old build dirs
  rm -rf $pkgname-{32,64}-build
  mkdir $pkgname-32-build
  cd $pkgname
  patch -Np1 -i ../patch-1.9.1-ivb.patch
  patch -Np1 -i ../patch_temp_constants.patch
}

build() {
  cd "$srcdir"

  if [[ $CARCH == x86_64 ]]; then
    msg2 "Building Wine-64..."

    mkdir $pkgname-64-build
    cd "$srcdir/$pkgname-64-build"
    ../$pkgname/configure \
      --prefix=/usr \
      --libdir=/usr/lib \
      --with-x \
      --without-gstreamer \
      --enable-win64 \
      --with-xattr
    # Gstreamer was disabled for FS#33655

    make

    _wine32opts=(
      --libdir=/usr/lib32
      --with-wine64="$srcdir/$pkgname-64-build"
    )

    export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"
  fi

  msg2 "Building Wine-32..."
  cd "$srcdir/$pkgname-32-build"
  ../$pkgname/configure \
    --prefix=/usr \
    --with-x \
    --without-gstreamer \
    --with-xattr \
    "${_wine32opts[@]}"

  # These additional flags solve FS#23277
  make CFLAGS+="-mstackrealign -mincoming-stack-boundary=2" CXXFLAGS+="-mstackrealign -mincoming-stack-boundary=2"
}

package() {
  depends=(${_depends[@]})

  msg2 "Packaging Wine-32..."
  cd "$srcdir/$pkgname-32-build"

  if [[ $CARCH == i686 ]]; then
    make prefix="$pkgdir/usr" install
  else
    make prefix="$pkgdir/usr" \
      libdir="$pkgdir/usr/lib32" \
      dlldir="$pkgdir/usr/lib32/wine" install

    msg2 "Packaging Wine-64..."
    cd "$srcdir/$pkgname-64-build"
    make prefix="$pkgdir/usr" \
      libdir="$pkgdir/usr/lib" \
      dlldir="$pkgdir/usr/lib/wine" install
  fi

  # Font aliasing settings for Win32 applications
  install -d "$pkgdir"/etc/fonts/conf.{avail,d}
  install -m644 "$srcdir/30-win32-aliases.conf" "$pkgdir/etc/fonts/conf.avail"
  ln -s ../conf.avail/30-win32-aliases.conf "$pkgdir/etc/fonts/conf.d/30-win32-aliases.conf"
}

# vim:set ts=8 sts=2 sw=2 et:
