# Maintainer: Naoya Inada <naoina@kuune.org>
# Contributor: UTUMI Hirosi <utuhiro78 at yahoo dot co dot jp>
# Contributor: Felix Yan <felixonmars@gmail.com>
# Contributor: ponsfoot <cabezon dot hashimoto at gmail dot com>

# NOTE: This PKGBUILD is based on https://osdn.net/downloads/users/27/27012/fcitx-mozc-ut-2.26.4237.102.20201229.1.PKGBUILD

## Mozc compile option
_bldtype=Release

_mozcver=2.26.4237.102
_fcitxver=20201111
_utdicver=20201229
pkgver=${_mozcver}.${_utdicver}
pkgrel=1

_pkgbase=mozc
pkgname=mozc-ut
pkgdesc="A Japanese Input Method for Chromium OS, Windows, Mac and Linux (the Open Source Edition of Google Japanese Input) with Mozc UT Dictionary (additional dictionary)"
arch=('x86_64')
url="https://osdn.net/users/utuhiro/pf/utuhiro/files/"
license=('custom')
depends=('qt5-base')
makedepends=('clang' 'gyp' 'ninja' 'pkg-config' 'python' 'curl' 'gtk2' 'qt5-base' 'libxcb' 'glib2' 'bzip2' 'unzip')
conflicts=('fcitx-mozc' 'mozc' 'fcitx-mozc-ut2' 'mozc-ut2' 'fcitx-mozc-neologd-ut' 'mozc-neologd-ut' 'fcitx-mozc-ut-unified' 'mozc-ut-unified')

source=(
  https://osdn.net/users/utuhiro/pf/utuhiro/dl/mozc-${_mozcver}.tar.bz2
  abseil-cpp-20200923.2.tar.gz::https://github.com/abseil/abseil-cpp/archive/20200923.2.tar.gz
  googletest-release-1.10.0.tar.gz::https://github.com/google/googletest/archive/release-1.10.0.tar.gz
  japanese-usage-dictionary-master.zip::https://github.com/hiroyuki-komatsu/japanese-usage-dictionary/archive/master.zip
  protobuf-3.13.0.tar.gz::https://github.com/protocolbuffers/protobuf/archive/v3.13.0.tar.gz
  https://osdn.net/users/utuhiro/pf/utuhiro/dl/mozcdic-ut-${_utdicver}.${pkgrel}.tar.bz2
  https://www.post.japanpost.jp/zipcode/dl/kogaki/zip/ken_all.zip
  https://www.post.japanpost.jp/zipcode/dl/jigyosyo/zip/jigyosyo.zip
)

sha1sums=(
  'b0b8fbf69f0d6089a800533a99be747e40faf922'
  '1dd3f0a937c3678437646d26ca6784bd6a9b2b26'
  '9c89be7df9c5e8cb0bc20b3c4b39bf7e82686770'
  'bf15e8ff92cbde3c102cbf4ad50c2090a7165495'
  '2160cfb354148da3fb3891b267c2edc7e3eb5c30'
  'f248798642153122628b41c62a7329c9be4f8e52'
  'SKIP'
  'SKIP'
)

prepare() {
  cd mozc-${_mozcver}
  rm -rf src/third_party
  mkdir src/third_party
  mv ${srcdir}/abseil-cpp-20200923.2 src/third_party/abseil-cpp
  mv ${srcdir}/googletest-release-1.10.0 src/third_party/gtest
  mv ${srcdir}/japanese-usage-dictionary-master src/third_party/japanese_usage_dictionary
  mv ${srcdir}/protobuf-3.13.0 src/third_party/protobuf

  # Add ZIP code
  cd src/data/dictionary_oss/
  PYTHONPATH="${PYTHONPATH}:../../" \
  python ../../dictionary/gen_zip_code_seed.py \
  --zip_code=${srcdir}/KEN_ALL.CSV --jigyosyo=${srcdir}/JIGYOSYO.CSV >> dictionary09.txt
  cd -

  # use libstdc++ instead of libc++
  sed "/stdlib=libc++/d;/-lc++/d" -i src/gyp/common.gypi

  # Add UT dictionary
  cat ${srcdir}/mozcdic-ut-${_utdicver}.${pkgrel}/mozcdic*-ut-*.txt >> src/data/dictionary_oss/dictionary00.txt
}

build() {
  cd mozc-${_mozcver}/src

  _targets="server/server.gyp:mozc_server gui/gui.gyp:mozc_tool"

  GYP_DEFINES="document_dir=/usr/share/licenses/mozc" python build_mozc.py gyp --gypdir=/usr/bin --target_platform=Linux
  python build_mozc.py build -c $_bldtype $_targets
}

package() {
  cd mozc-${_mozcver}/src
  install -D -m 755 out_linux/${_bldtype}/mozc_server "${pkgdir}/usr/lib/mozc/mozc_server"
  install -m 755 out_linux/${_bldtype}/mozc_tool "${pkgdir}/usr/lib/mozc/mozc_tool"

  install -d "${pkgdir}/usr/share/licenses/$pkgname/"
  install -m 644 ../LICENSE data/installer/*.html "${pkgdir}/usr/share/licenses/${pkgname}/"
}
