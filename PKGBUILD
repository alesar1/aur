# Maintainer: Naoya Inada <naoina@kuune.org>
# Contributor: UTUMI Hirosi <utuhiro78 at yahoo dot co dot jp>
# Contributor: Felix Yan <felixonmars@gmail.com>
# Contributor: ponsfoot <cabezon dot hashimoto at gmail dot com>

# NOTE: This PKGBUILD is based on https://osdn.net/downloads/users/30/30473/fcitx-mozc-ut-20210524.1.PKGBUILD

# Mozc compile option
_bldtype=Release

_mozcver=2.26.4381.102
_fcitxver=20210329
_iconver=20201229
_utdicver=20210524
pkgver=${_mozcver}.${_utdicver}
pkgrel=1

_pkgbase=mozc
pkgname=fcitx-mozc-ut
pkgdesc="Fcitx engine module for Mozc with Mozc UT Dictionary"
arch=('x86_64')
url="https://osdn.net/users/utuhiro/pf/utuhiro/files/"
license=('custom')
depends=('mozc-ut' 'fcitx' 'qt5-base')
makedepends=('clang' 'gyp' 'ninja' 'pkg-config' 'python' 'curl' 'gtk2' 'qt5-base' 'fcitx' 'libxcb' 'glib2' 'bzip2' 'unzip')
conflicts=('fcitx-mozc' 'fcitx-mozc-ut2' 'fcitx-mozc-neologd-ut' 'fcitx-mozc-ut-unified')

source=(
  https://osdn.net/users/utuhiro/pf/utuhiro/dl/mozc-${_mozcver}.tar.bz2
  abseil-cpp-20200923.2.tar.gz::https://github.com/abseil/abseil-cpp/archive/20200923.2.tar.gz
  googletest-release-1.10.0.tar.gz::https://github.com/google/googletest/archive/release-1.10.0.tar.gz
  protobuf-3.13.0.tar.gz::https://github.com/protocolbuffers/protobuf/archive/v3.13.0.tar.gz
  https://osdn.net/users/utuhiro/pf/utuhiro/dl/fcitx-mozc-${_fcitxver}.patch
  https://osdn.net/users/utuhiro/pf/utuhiro/dl/fcitx-mozc-icons-${_iconver}.tar.gz
  https://osdn.net/users/utuhiro/pf/utuhiro/dl/mozcdic-ut-${_utdicver}.1.tar.bz2
)

sha256sums=(
  '4ee389b22aa171f9730e2de68e9231a22cd82b709f1b5c81984b6ead6158b281'
  'bf3f13b13a0095d926b25640e060f7e13881bd8a792705dd9e161f3c2b9aa976'
  '9dc9157a9a1551ec7a7e43daea9a694a0bb5fb8bec81235d8a1e6ef64c716dcb'
  '9b4ee22c250fe31b16f1a24d61467e40780a3fbb9b91c3b65be2a376ed913a1a'
  'b8c0e65b3e3f8cff8e35a8e044158d78bd534a3a64389cd98256b2a1b4f232ed'
  '7985e6e8c4f4f45f8d040e54715c90b54cd51bb86f6a97fa3bdb17b2137e927d'
  '32563ddc71a50716f907452bed600caa236db7271a7f3966a42df1be6d10a4ae'
)

prepare() {
  cd mozc-${_mozcver}
  rm -rf src/third_party
  mkdir src/third_party
  mv ${srcdir}/abseil-cpp-20200923.2 src/third_party/abseil-cpp
  mv ${srcdir}/googletest-release-1.10.0 src/third_party/gtest
  mv ${srcdir}/protobuf-3.13.0 src/third_party/protobuf
  patch -Np1 -i ${srcdir}/fcitx-mozc-${_fcitxver}.patch

  # Use libstdc++ instead of libc++
  sed "/stdlib=libc++/d;/-lc++/d" -i src/gyp/common.gypi
}

build() {
  cd mozc-${_mozcver}/src

  _targets="unix/fcitx/fcitx.gyp:fcitx-mozc unix/fcitx/fcitx.gyp:gen_fcitx_mozc_i18n"

  GYP_DEFINES="enable_gtk_renderer==0" python build_mozc.py gyp --gypdir=/usr/bin --target_platform=Linux
  python build_mozc.py build -c $_bldtype $_targets
}

package() {
  cd mozc-${_mozcver}/src
  install -d ${pkgdir}/usr/share/licenses/$pkgname/
  install -m 644 ../LICENSE data/installer/*.html ${pkgdir}/usr/share/licenses/${pkgname}/

  for mofile in out_linux/${_bldtype}/gen/unix/fcitx/po/*.mo
  do
    filename=`basename $mofile`
    lang=${filename/.mo/}
    install -D -m 644 $mofile ${pkgdir}/usr/share/locale/$lang/LC_MESSAGES/fcitx-mozc.mo
  done

  install -D -m 755 out_linux/${_bldtype}/fcitx-mozc.so ${pkgdir}/usr/lib/fcitx/fcitx-mozc.so
  install -D -m 644 unix/fcitx/fcitx-mozc.conf ${pkgdir}/usr/share/fcitx/addon/fcitx-mozc.conf
  install -D -m 644 unix/fcitx/mozc.conf ${pkgdir}/usr/share/fcitx/inputmethod/mozc.conf

  install -d ${pkgdir}/usr/share/doc/${pkgname}/
  cp {../AUTHORS,../LICENSE,../README.md} ${pkgdir}/usr/share/doc/${pkgname}/

  install -d ${pkgdir}/usr/share/fcitx/mozc/icon
  install -m 644 ${srcdir}/fcitx-mozc-icons-${_iconver}/*.png ${pkgdir}/usr/share/fcitx/mozc/icon/
}
