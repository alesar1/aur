# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

pkgbase=wxwidgets-dev-light
pkgname=('wxgtk2-dev-light'
         'wxgtk3-dev-light'
         'wxcommon-dev-light'
         )
pkgver=3.1.5
pkgrel=2
pkgdesc="wxWidgets suite for Base and GTK2 and GTK3 toolkits . Development branch (GNOME/GStreamer free!)"
arch=('x86_64')
url='http://wxwidgets.org'
license=('custom:wxWindows')
makedepends=('git'
             'glu'
             'bash'
             'gtk2'
             'gtk3'
             'libsm'
             'libnotify'
             'curl'
             'libsecret'
             'libxtst'
             )
source=("wxwidgets::git+https://github.com/wxWidgets/wxWidgets.git#tag=v${pkgver}"
        'https://raw.githubusercontent.com/archlinux/svntogit-packages/packages/wxgtk/trunk/wxgtk-abicheck.patch'
        'git+https://github.com/wxWidgets/Catch.git'
        'wxGTK-collision.patch'
        )
sha256sums=('SKIP'
            '53501db871290b71967af08b60aedb738c920a307ef9bd32dd19c30498732cf8'
            'SKIP'
            '48b528acbbbbb0bc409c1efed04a0a055a5c81393ae3133c6339aee6821acfe5'
            )
options=('debug')

prepare() {
  mkdir -p build-{base,gtk{2,3}}

  cd wxwidgets

  git config submodule.3rdparty/catch.url "${srcdir}/Catch"
  git submodule update --init 3rdparty/catch

  patch -Np1 -i "${srcdir}/wxGTK-collision.patch"

  # C++ ABI check is too strict
  patch -Np1 -i "${srcdir}/wxgtk-abicheck.patch"
}

build() {
  msg2 "Build WxBASE"
  cd "${srcdir}/build-base"
  ../wxwidgets/configure \
    --prefix=/usr \
    --libdir=/usr/lib \
    --with-regex=builtin \
    --disable-{precomp-headers,gui}

  make
  make -C ../wxwidgets/locale allmo

  msg2 "Build WxGTK2"
  cd "${srcdir}/build-gtk2"
  ../wxwidgets/configure \
    --prefix=/usr \
    --libdir=/usr/lib \
    --with-gtk=2 \
    --with-lib{jpeg,png,tiff,xpm}=sys \
    --with-regex=builtin \
    --with-{opengl,sdl} \
    --enable-graphics_ctx \
    --without-gnomevfs \
    --disable-{gtktest,sdltest,precomp-headers,mediactrl,webview}

  make
  make -C ../wxwidgets/locale allmo

  msg2 "Build WxGTK3"
  cd "${srcdir}/build-gtk3"
  ../wxwidgets/configure \
    --prefix=/usr \
    --libdir=/usr/lib \
    --with-gtk=3 \
    --with-lib{jpeg,png,tiff,xpm}=sys \
    --with-regex=builtin \
    --with-{opengl,sdl} \
    --enable-graphics_ctx \
    --without-gnomevfs \
    --disable-{gtktest,sdltest,precomp-headers,mediactrl,webview}

  make
  make -C ../wxwidgets/locale allmo
}

package_wxgtk2-dev-light() {
  pkgdesc="wxWidgets GTK2 Toolkit. Development branch (GNOME/GStreamer free!)"
  depends=('wxcommon-dev-light'
           'gtk2'
           'libsm'
           'sdl2'
           'libnotify'
           'libxtst'
           )
  provides=('wxgtk2-dev')
  conflicts=('wxgtk2-dev')
  options=('!emptydirs')

  make -C build-gtk2 DESTDIR="${pkgdir}" install
  make -C build-gtk2 DESTDIR="${pkgdir}" uninstall_basedll uninstall_netdll uninstall_xmldll locale_uninstall
  make -C build-gtk2/utils DESTDIR="${pkgdir}" uninstall_wxrc

  cp -P "${pkgdir}/usr/bin/wx-config-3.1" "${pkgdir}/usr/bin/wx-config-gtk2-3.1"
  rm -fr "${pkgdir}/usr/include"
  rm -fr "${pkgdir}/usr/share/bakefile"

  install -Dm644 wxwidgets/docs/licence.txt "${pkgdir}/usr/share/licenses/wxgtk2-dev-light/LICENSE"
}

package_wxgtk3-dev-light() {
  pkgdesc="wxWidgets GTK3 Toolkit. Development branch (GNOME/GStreamer free!)"
  depends=('wxcommon-dev-light'
           'gtk3'
           'libsm'
           'sdl2'
           'libnotify'
           )
  provides=('wxgtk3-dev')
  conflicts=('wxgtk3-dev')
  options=('!emptydirs')

  make -C build-gtk3 DESTDIR="${pkgdir}" install
  make -C build-gtk3 DESTDIR="${pkgdir}" uninstall_basedll uninstall_netdll uninstall_xmldll locale_uninstall
  make -C build-gtk3/utils DESTDIR="${pkgdir}" uninstall_wxrc

  mv "${pkgdir}/usr/bin/wx-config-3.1" "${pkgdir}/usr/bin/wx-config-gtk3-3.1"
  rm -fr "${pkgdir}/usr/include"
  rm -fr "${pkgdir}/usr/share/bakefile"

  install -Dm644 wxwidgets/docs/licence.txt "${pkgdir}/usr/share/licenses/wxgtk3-dev-light/LICENSE"
}

package_wxcommon-dev-light() {
  pkgdesc="wxWidgets common & base. Development branch (GNOME/GStreamer free!)"
  depends=('expat'
           'curl'
           'libsecret'
           )
  provides=('wxbase-dev-light'
            'wxbase-dev'
            'wxgtk-common-dev'
            )
  conflicts=('wxbase-dev-light'
             'wxbase-dev'
             'wxgtk-common-dev'
             )
  options=('!emptydirs')

  make -C build-gtk2 DESTDIR="${pkgdir}" install
  make -C build-gtk3 DESTDIR="${pkgdir}" install
  make -C build-base DESTDIR="${pkgdir}" install

  make -C build-gtk2 DESTDIR="${pkgdir}" uninstall_advdll uninstall_auidll uninstall_coredll uninstall_gldll uninstall_htmldll uninstall_propgriddll uninstall_qadll uninstall_ribbondll uninstall_richtextdll uninstall_stcdll uninstall_xrcdll
  make -C build-gtk3 DESTDIR="${pkgdir}" uninstall_advdll uninstall_auidll uninstall_coredll uninstall_gldll uninstall_htmldll uninstall_propgriddll uninstall_qadll uninstall_ribbondll uninstall_richtextdll uninstall_stcdll uninstall_xrcdll

  mv "${pkgdir}/usr/bin/wx-config-3.1" "${pkgdir}/usr/bin/wx-config-base-3.1"
  rm -fr "${pkgdir}/usr/bin/wxrc"
  rm -fr "${pkgdir}/usr/lib/wx/"{config,include}/gtk*

  install -Dm644 wxwidgets/docs/licence.txt "${pkgdir}/usr/share/licenses/wxcommon-dev-light/LICENSE"
}
