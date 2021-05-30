# Maintainer: Masaki Haruka <yek at reasonset dot net>
# Contributor: UTUMI Hirosi <utuhiro78 at yahoo dot co dot jp>
# Contributor: Felix Yan <felixonmars@gmail.com>
# Contributor: ponsfoot <cabezon dot hashimoto at gmail dot com>

# Mozc compile option
_bldtype=Release

_mozcver=2.26.4381.102
_fcitxver=20210329
_iconver=20201229
_utdicver=20210524
pkgver=${_mozcver}.${_utdicver}
pkgrel=2

_pkgbase=mozc
pkgname=fcitx-mozc-ut-unified-full
pkgdesc="Fcitx Module of A Japanese Input Method for Chromium OS, Windows, Mac and Linux (the Open Source Edition of Google Japanese Input) with New UT dictionaries (default dictionaties.)"
arch=('x86_64')
url="https://osdn.net/users/utuhiro/pf/utuhiro/files/"
license=('custom')
depends=('fcitx' 'qt5-base')
makedepends=('clang' 'gyp' 'ninja' 'pkg-config' 'python' 'curl' 'qt5-base' 'fcitx' 'libxcb' 'glib2' 'bzip2' 'unzip')
conflicts=('fcitx-mozc' 'mozc' 'fcitx-mozc-ut2' 'mozc-ut2' 'fcitx-mozc-ut' 'mozc-ut' 'fcitx-mozc-neologd-ut' 'mozc-neologd-ut' 'fcitx-mozc-neologd-ut+ut2' 'mozc-ut-unified' 'fcitx-mozc-ut-unified')

source=(
  https://osdn.net/users/utuhiro/pf/utuhiro/dl/mozc-${_mozcver}.tar.bz2
  abseil-cpp-20200923.2.tar.gz::https://github.com/abseil/abseil-cpp/archive/20200923.2.tar.gz
  googletest-release-1.10.0.tar.gz::https://github.com/google/googletest/archive/release-1.10.0.tar.gz
  japanese-usage-dictionary-master.zip::https://github.com/hiroyuki-komatsu/japanese-usage-dictionary/archive/master.zip
  protobuf-3.13.0.tar.gz::https://github.com/protocolbuffers/protobuf/archive/v3.13.0.tar.gz
  https://osdn.net/users/utuhiro/pf/utuhiro/dl/fcitx-mozc-${_fcitxver}.patch
  https://osdn.net/users/utuhiro/pf/utuhiro/dl/fcitx-mozc-icons-${_iconver}.tar.gz
  'https://osdn.net/frs/chamber_redir.php?m=jaist&f=%2Fusers%2F30%2F30492%2Fmozcdic-ut-full-20210524.1.tar.bz2'
  https://www.post.japanpost.jp/zipcode/dl/kogaki/zip/ken_all.zip
  https://www.post.japanpost.jp/zipcode/dl/jigyosyo/zip/jigyosyo.zip
  fix-abseil-cpp-build-gcc11.patch::https://yanqiyu.fedorapeople.org/fcitx5-mozc/fix-build-gcc11.patch
)

sha256sums=(
  '4ee389b22aa171f9730e2de68e9231a22cd82b709f1b5c81984b6ead6158b281'
  'bf3f13b13a0095d926b25640e060f7e13881bd8a792705dd9e161f3c2b9aa976'
  '9dc9157a9a1551ec7a7e43daea9a694a0bb5fb8bec81235d8a1e6ef64c716dcb'
  'e46b1c40facbc969b7a4af154dab30ab414f48a0fdbe57d199f912316977ac25'
  '9b4ee22c250fe31b16f1a24d61467e40780a3fbb9b91c3b65be2a376ed913a1a'
  'b8c0e65b3e3f8cff8e35a8e044158d78bd534a3a64389cd98256b2a1b4f232ed'
  '7985e6e8c4f4f45f8d040e54715c90b54cd51bb86f6a97fa3bdb17b2137e927d'
  '58dbb9d9e5db15a613ad160c4015b2af5e0dd3627d35f054991c2364fbae894b'
  'SKIP'
  'SKIP'
  '2b1a14993dbf6c16601c495b55fab3c7ff50d3260a79514d8fb1dbd53b602dca'
)

prepare() {
  cd mozc-${_mozcver}
  rm -rf src/third_party
  mkdir src/third_party
  mv ${srcdir}/abseil-cpp-20200923.2 src/third_party/abseil-cpp
  mv ${srcdir}/googletest-release-1.10.0 src/third_party/gtest
  mv ${srcdir}/japanese-usage-dictionary-master src/third_party/japanese_usage_dictionary
  mv ${srcdir}/protobuf-3.13.0 src/third_party/protobuf
  patch -Np1 -i ${srcdir}/fcitx-mozc-${_fcitxver}.patch
  patch -Np1 -i ${srcdir}/fix-abseil-cpp-build-gcc11.patch

  # Add ZIP code
  cd src/data/dictionary_oss/
  PYTHONPATH="${PYTHONPATH}:../../" \
  python ../../dictionary/gen_zip_code_seed.py \
  --zip_code=${srcdir}/KEN_ALL.CSV --jigyosyo=${srcdir}/JIGYOSYO.CSV >> dictionary09.txt
  cd -

  # Use libstdc++ instead of libc++
  sed "/stdlib=libc++/d;/-lc++/d" -i src/gyp/common.gypi

  # Add UT dictionary
  cat ${srcdir}/mozcdic-ut-${_utdicver}.1/mozcdic*-ut-*.txt >> src/data/dictionary_oss/dictionary00.txt
}

build() {
  cd mozc-${_mozcver}/src

  _targets="server/server.gyp:mozc_server gui/gui.gyp:mozc_tool unix/fcitx/fcitx.gyp:fcitx-mozc unix/fcitx/fcitx.gyp:gen_fcitx_mozc_i18n"

  GYP_DEFINES="enable_gtk_renderer==0" python build_mozc.py gyp --gypdir=/usr/bin --target_platform=Linux
  python build_mozc.py build -c $_bldtype $_targets
}

package() {
  cd mozc-${_mozcver}/src
  install -D -m 755 out_linux/${_bldtype}/mozc_server ${pkgdir}/usr/lib/mozc/mozc_server
  install -m 755 out_linux/${_bldtype}/mozc_tool ${pkgdir}/usr/lib/mozc/mozc_tool

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
