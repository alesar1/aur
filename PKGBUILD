pkgname=mingw-w64-python39-bin
pkgver=3.9.0
_pybasever=39
pkgrel=1
pkgdesc="Next generation of the python high-level scripting language (native MSVC version) (mingw-w64)"
arch=('any')
license=('PSF')
url="http://www.python.org/"
depends=('mingw-w64-openssl')
optdepends=('mingw-w64-wine: runtime support')
makedepends=('mingw-w64-tools' 'mingw-w64-binutils')
options=('staticlibs' '!buildflags' '!strip')
source=("https://www.python.org/ftp/python/${pkgver}/python-${pkgver}rc1-embed-win32.zip"
        "https://www.python.org/ftp/python/${pkgver}/python-${pkgver}rc1-embed-amd64.zip"
        "https://www.python.org/ftp/python/${pkgver}/Python-${pkgver}rc1.tgz"
        wine-python.sh)
noextract=("python-${pkgver}rc1-embed-win32.zip"
           "python-${pkgver}rc1-embed-amd64.zip")
sha256sums=('e81cb972d7ab7ab1944e11582f1a6ebb0e3c87b4bba68dadae58f455e0db6151'
            '45f13f5881f94522951d1c4a400ad80a2564aa3e1458329089555b7842f43ccd'
            'ef62b8e524c892168171c52db2a7bfaa9e48bc0b1f5179128c9eca368e1f8d21'
            '86e768f17994ce586d646b4ace95f819943dfe6a0fb1afa40de4188e975d5db8')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare () {
  cd "${srcdir}/Python-${pkgver}rc1"
}

build() {
  cd "${srcdir}/Python-${pkgver}rc1"
  for _arch in ${_architectures}; do
    target="win32"
    if test "${_arch}" = x86_64-w64-mingw32
    then
      target="amd64"
    fi
    mkdir -p "build-${_arch}" && pushd "build-${_arch}"
    bsdtar -xf "${srcdir}"/python-${pkgver}rc1-embed-${target}.zip
    gendef python${_pybasever}.dll
    ${_arch}-dlltool --dllname python${_pybasever}.dll --def python${_pybasever}.def --output-lib libpython${_pybasever}.dll.a
    sed "s|@TRIPLE@|${_arch}|g;s|@PYVER@|${_pybasever}|g" "${srcdir}"/wine-python.sh > ${_arch}-python${_pybasever}-bin
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/Python-${pkgver}rc1/build-${_arch}"
    install -d "$pkgdir"/usr/${_arch}/lib
    install -m644 libpython${_pybasever}*.a "$pkgdir"/usr/${_arch}/lib
    install -d "$pkgdir"/usr/${_arch}/bin
    install -d "$pkgdir"/usr/${_arch}/include/python${_pybasever}
    cp -r ../Include/* "$pkgdir"/usr/${_arch}/include/python${_pybasever}
    install -m644 ../PC/pyconfig.h "$pkgdir"/usr/${_arch}/include/python${_pybasever}
    install -m755 python${_pybasever}.dll "$pkgdir"/usr/${_arch}/bin
    install -d "$pkgdir"/usr/${_arch}/lib/python${_pybasever}
    install -m644 *.pyd "$pkgdir"/usr/${_arch}/lib/python${_pybasever}
    install -m755 python.exe "$pkgdir"/usr/${_arch}/bin/python${_pybasever}.exe
    install -m644 python${_pybasever}.zip "$pkgdir"/usr/${_arch}/bin/
    install -d "$pkgdir"/usr/bin
    install -m755 ${_arch}-python${_pybasever}-bin "$pkgdir"/usr/bin
    pushd "$pkgdir"/usr/${_arch}/bin/
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
  done
}
