# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=3dslicer
pkgver=5.0.2
pkgrel=1
pkgdesc='A free, open source and multi-platform software package widely used for medical, biomedical, and related imaging research'
arch=('x86_64')
url='https://www.slicer.org'
license=('BSD')
depends=(
  bzip2
  curl
  dcmtk
  libarchive
  libxt
  openssl
  qt5-base
  qt5-multimedia
  qt5-script
  qt5-svg
  qt5-tools
  qt5-webengine
  qt5-x11extras
  qt5-xmlpatterns
  rapidjson
  sqlite
  teem
)
makedepends=(
  clang
  cmake
  gendesk
  git
  subversion
)
options=(!emptydirs !strip)
source=("${pkgname}::git+https://github.com/Slicer/Slicer.git#tag=v${pkgver}"
        "${pkgname}.svg::https://www.slicer.org/assets/img/3D-Slicer-Mark.svg"
        "itk_limits.patch"
)
sha512sums=('SKIP'
            '3422d244f819a7ec4c475d3d8a90c79fcb73738920c0830b100c6342ca24d5be607ba60ee3d91892402036a0adf31d5ab7c8fc83f451121a7b537f7de5306014'
            'e0c19c5fc2580366b91b16f20e6b8914dbb003a5ce2741fd5b2d2f5520724266c037b1edac33dc00a344a96c627743c5670f861065e28d81a4b207ab8082cc2e')

prepare() {
  # find sqlite with cmake's FindSQLite3
  sed -i 's/find_package(${proj} REQUIRED)/find_package(SQLite3 REQUIRED)/' "${srcdir}/${pkgname}/SuperBuild/External_sqlite.cmake"
  # fix building with system teem
  sed -i '/ExternalProject_Add_Empty/d' "${srcdir}/${pkgname}/SuperBuild/External_teem.cmake"
  # quick fix clang:12/gcc:11 <limits> header regression
  git -C "${srcdir}/${pkgname}" apply -v "${srcdir}/itk_limits.patch"
  echo "Creating desktop file"
  gendesk -f -n --pkgname ${pkgname} \
    --pkgdesc "${pkgdesc}" \
    --categories "Graphics;MedicalSoftware;Science;" \
    --icon "${pkgname}" \
    --exec "Slicer"
}

build() {
  cmake -B build -S "${srcdir}/${pkgname}" \
    -DCMAKE_C_COMPILER=clang \
    -DCMAKE_CXX_COMPILER=clang++ \
    -DBUILD_TESTING=OFF \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DSlicer_BUILD_DOCUMENTATION=OFF \
    -DSlicer_BUILD_I18N_SUPPORT=ON \
    -DSlicer_STORE_SETTINGS_IN_APPLICATION_HOME_DIR=OFF \
    -DSlicer_USE_GIT_PROTOCOL=OFF \
    -DSlicer_USE_SimpleITK_SHARED=ON \
    -DSlicer_USE_SYSTEM_bzip2=ON \
    -DSlicer_USE_SYSTEM_curl=ON \
    -DSlicer_USE_SYSTEM_DCMTK=ON \
    -DSlicer_USE_SYSTEM_LibArchive=ON \
    -DSlicer_USE_SYSTEM_LZMA=ON \
    -DSlicer_USE_SYSTEM_OpenSSL=ON \
    -DSlicer_USE_SYSTEM_QT=ON \
    -DSlicer_USE_SYSTEM_RapidJSON=ON \
    -DSlicer_USE_SYSTEM_sqlite=ON \
    -DSlicer_USE_SYSTEM_teem=ON \
    -DSlicer_USE_SYSTEM_VTK=OFF \
    -DSlicer_USE_SYSTEM_zlib=ON
  make -C "build"
}

package() {
  cd "${srcdir}/build/Slicer-build"
  make package
  install -d "${pkgdir}/opt/${pkgname}" "${pkgdir}/usr/bin"
  tar xvf "${srcdir}/build/Slicer-build/"*.tar.gz -C "${pkgdir}/opt/${pkgname}" --strip-components 1
  ln -s /opt/${pkgname}/Slicer "${pkgdir}/usr/bin"
  install -Dm644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm644 "${srcdir}/${pkgname}.svg" "${pkgdir}/usr/share/pixmaps/${pkgname}.svg"
}
# vim:set ts=2 sw=2 et:
