# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

pkgbase=wxwidgets-light
pkgname=('wxwidgets-common-light'
         'wxwidgets-gtk3-light'
         'wxwidgets-qt5-light'
         )
pkgver=3.2.0
pkgrel=3
pkgdesc="wxWidgets suite for Base, Qt5 and GTK3 toolkits (GNOME/GStreamer free!)"
arch=('x86_64')
url='http://wxwidgets.org'
license=('custom:wxWindows')
makedepends=('git'
             'glu'
             'sh'
             'gtk2'
             'gtk3'
             'libsm'
             'libgl'
             'libnotify'
             'cmake'
             )
source=("wxwidgets::git+https://github.com/wxWidgets/wxWidgets.git#tag=v${pkgver}"
        'git+https://github.com/wxWidgets/nanosvg.git'
        'https://raw.githubusercontent.com/archlinux/svntogit-packages/packages/wxwidgets/trunk/destdir.patch'
        )
sha256sums=('SKIP'
            'SKIP'
            'cb4a7ca0d40b090d5d40d77790828a26766c6b496b3a5f5351fa30b3a6b42bd9'
            )
options=('debug')

prepare() {
  mkdir -p build-{base,gtk3,qt5}

  cd wxwidgets

  git config submodule.3rdparty/nanosvg.url "${srcdir}/nanosvg"
  git submodule update --init 3rdparty/nanosvg

  patch -Np1 -i "${srcdir}/destdir.patch"
}

build() {
  msg2 "Build WxBASE"
  cmake -B build-base -S wxwidgets \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=None \
    -DwxUSE_OPENGL=ON \
    -DwxUSE_REGEX=sys\
    -DwxUSE_ZLIB=sys \
    -DwxUSE_EXPAT=sys \
    -DwxUSE_LIBJPEG=sys \
    -DwxUSE_LIBPNG=sys \
    -DwxUSE_LIBTIFF=sys \
    -DwxUSE_LIBLZMA=sys \
    -DwxUSE_LIBMSPACK=ON \
    -DwxUSE_STL=ON \
    -DwxUSE_PRIVATE_FONTS=ON \
    -DwxUSE_GUI=OFF

  cmake --build build-base

  msg2 "Build WxGTK3"
    cmake -B build-gtk3 -S wxwidgets \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=None \
    -DwxBUILD_TOOLKIT=gtk3 \
    -DwxUSE_OPENGL=ON \
    -DwxUSE_REGEX=sys\
    -DwxUSE_ZLIB=sys \
    -DwxUSE_EXPAT=sys \
    -DwxUSE_LIBJPEG=sys \
    -DwxUSE_LIBPNG=sys \
    -DwxUSE_LIBTIFF=sys \
    -DwxUSE_LIBLZMA=sys \
    -DwxUSE_LIBMSPACK=ON \
    -DwxUSE_STL=ON \
    -DwxUSE_MEDIACTRL=OFF \
    -DwxUSE_PRIVATE_FONTS=ON \
    -DwxUSE_GTKPRINT=ON -DCMAKE_CXX_FLAGS="$CXXFLAGS -I/usr/include/gtk-3.0/unix-print/"

  cmake --build build-gtk3

  msg2 "Build WxQT5"
  cmake -B build-qt5 -S wxwidgets \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=None \
    -DwxBUILD_TOOLKIT=qt \
    -DwxUSE_OPENGL=ON \
    -DwxUSE_REGEX=sys \
    -DwxUSE_ZLIB=sys \
    -DwxUSE_EXPAT=sys \
    -DwxUSE_LIBJPEG=sys \
    -DwxUSE_LIBPNG=sys \
    -DwxUSE_LIBTIFF=sys \
    -DwxUSE_LIBLZMA=sys \
    -DwxUSE_LIBMSPACK=ON \
    -DwxUSE_STL=ON \
    -DwxUSE_MEDIACTRL=OFF \
    -DwxUSE_PRIVATE_FONTS=ON

  cmake --build build-qt5

  # Run configure to generate the Makefile, cmake doesn't install translations
  cd wxwidgets
  ./configure --prefix=/usr --disable-tests
}

package_wxwidgets-qt5-light() {
pkgdesc="wxWidgets Qt5 Toolkit (GNOME/GStreamer free!)"
  depends=('wxwidgets-common-light'
           'libgl'
           'qt5-base'
           'libsm'
           'sdl2'
           'libnotify'
           )
  provides=('wxwidgets-qt5'
            'wxwidgets'
            )
  conflicts=('wxwidgets-qt5')
  options+=('!emptydirs')

  make -C build-qt5 DESTDIR="${pkgdir}" install

  mv "${pkgdir}/usr/bin/wx-config" "${pkgdir}/usr/bin/wx-config-qt"
  rm -fr "${pkgdir}/usr/bin/"wxrc{,-3*}
  rm -fr "${pkgdir}/usr/include"
  rm -fr "${pkgdir}/usr/lib/"*base*
  rm -fr "${pkgdir}/usr/lib/cmake"
  rm -fr "${pkgdir}/usr/share/bakefile"
  rm -fr "${pkgdir}/usr/share/"{aclocal,locale}

  install -Dm644 wxwidgets/docs/licence.txt "${pkgdir}/usr/share/licenses/wxgtk2-light/LICENSE"
}

package_wxwidgets-gtk3-light() {
  pkgdesc="wxWidgets GTK3 Toolkit (GNOME/GStreamer free!)"
  depends=('wxwidgets-common-light'
           'gtk3'
           'libsm'
           'sdl2'
           'libnotify'
           )
  provides=('wxwidgets'
            'wxwidgets-gtk3'
            'wxgtk3'
            )
  conflicts=('wxwidgets-gtk3'
             'wxgtk3'
             )
  replaces=('wxgtk3-light'
            'wxgtk3'
            )
  options+=('!emptydirs')

  make -C build-gtk3 DESTDIR="${pkgdir}" install

  ln -s wx-config "${pkgdir}/usr/bin/wx-config-gtk3"
  rm -fr "${pkgdir}/usr/bin/"wxrc{,-3*}
  rm -fr "${pkgdir}/usr/include"
  rm -fr "${pkgdir}/usr/lib/"*base*
  rm -fr "${pkgdir}/usr/lib/cmake"
  rm -fr "${pkgdir}/usr/share/bakefile"
  rm -fr "${pkgdir}/usr/share/"{aclocal,locale}

  install -Dm644 wxwidgets/docs/licence.txt "${pkgdir}/usr/share/licenses/wxgtk3-light/LICENSE"
}

package_wxwidgets-common-light() {
  pkgdesc="wxWidgets common & base (GNOME/GStreamer free!)"
  depends=('sh'
           'expat'
           'zlib'
           )
  provides=('wxbase'
            'wxbase-light'
            'wxgtk-common'
            'wxwidgets-common'
            )
  conflicts=('wxbase'
             'wxbase-light'
             'wxgtk-common'
             'wxwidgets-common'
             )
  replaces=('wxcommon-light'
            'wxgtk-common'
            )
  options+=('!emptydirs')

  make -C build-qt5 DESTDIR="${pkgdir}" install
  make -C build-gtk3 DESTDIR="${pkgdir}" install
  make -C build-base DESTDIR="${pkgdir}" install

  mv "${pkgdir}/usr/bin/wx-config" "${pkgdir}/usr/bin/wx-config-base"
  rm -fr "${pkgdir}/usr/lib/"*qt*.so*
  rm -fr "${pkgdir}/usr/lib/"*gtk*.so*
  rm -fr "${pkgdir}/usr/lib/wx/"{config,include}/{gtk,qt}*
  rm -fr "${pkgdir}/usr/lib/wx/"3*

  install -Dm644 wxwidgets/wxwin.m4 -t "${pkgdir}/usr/share/aclocal"
  # Install translations
  make DESTDIR="${pkgdir}" -C wxwidgets locale_install

  install -Dm644 wxwidgets/docs/licence.txt "${pkgdir}/usr/share/licenses/wxcommon-light/LICENSE"
}
