# Maintainer: xgdgsc <xgdgsc @t gmail dot com>
# Maintainer: mynacol <dc07d át mynacol dót xyz>

pkgname=android-sdk-build-tools
#_ver=$(cat "${srcdir}/$_android/source.properties" |grep ^Pkg.Revision=|sed 's/Pkg.Revision=\([0-9.]*\).*/\1/')
_ver=32
pkgver=r$_ver
pkgrel=3
pkgdesc='Build-Tools for Google Android SDK (aapt, aidl, dexdump, dx, llvm-rs-cc)'
arch=('x86_64')
url="https://developer.android.com/studio/releases/build-tools"
license=('custom')
depends=('gcc-libs' 'zlib')
optdepends=('lib32-gcc-libs' 'lib32-zlib')

source=("https://dl-ssl.google.com/android/repository/build-tools_${pkgver}-linux.zip"
        "package.xml")
sha512sums=('effdb12758877bbceaa9efb638798cc7c018f3d9e48632a509445bbf5f684d287984f0657d832c6d78c4434d6425dccbc1cda08c0e63aa749c03ec996809eba9'
            '3bbb3283d80e42a21e05cd44d0a46a95c6a832c31993cb896a2620f6c39ebd33b0c1ec668e4b79e3f28d25e55e99f6940eff6b85e937e930b6d1326be4ae9e36')
options=('!strip')

_sdk=android-sdk
_android=android-12

package() {
  cd "$pkgdir"

  install -d usr/share/licenses/$pkgname/
  ln -s /opt/$_sdk/build-tools/$_ver.0.0/NOTICE.txt usr/share/licenses/$pkgname/NOTICE.txt
  sed -i "s/@major@/$_ver/g;s/@minor@/0/g;s/@micro@/0/g" "$srcdir/package.xml"
  install -Dm644 "${srcdir}/package.xml" opt/$_sdk/build-tools/$_ver.0.0/package.xml
  ln -s /opt/$_sdk/build-tools/$_ver.0.0/package.xml usr/share/licenses/$pkgname/package.xml

  target="opt/$_sdk/build-tools/$_ver.0.0"
  mkdir -p "$target"
  cp -r "$srcdir/$_android/"* "$target"
  chmod +Xr -R "$target"

  # Add symlinks to binaries to usr/bin/
  mkdir -p usr/bin/
  # lld is also provided by extra/lld, not creating symlink
  binaries=$(find "${target}" -maxdepth 1 -type f -executable -printf "%f\n" | grep -v lld)
  for f in ${binaries[@]}
  do
    ln -s "/$target/$f" "usr/bin/$f"
  done
}
