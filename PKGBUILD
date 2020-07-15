# Maintainer: xgdgsc <xgdgsc @t gmail dot com>
# Maintainer: mynacol <paul ät dismail _ de>

pkgname=android-sdk-build-tools
#_ver=$(cat "${srcdir}/$_android/source.properties" |grep ^Pkg.Revision=|sed 's/Pkg.Revision=\([0-9.]*\).*/\1/')
_ver=30.0.1
pkgver=r$_ver
pkgrel=1
pkgdesc='Build-Tools for Google Android SDK (aapt, aidl, dexdump, dx, llvm-rs-cc)'
arch=('i686' 'x86_64')
url="https://developer.android.com/studio/releases/build-tools"
license=('custom')
depends=('gcc-libs' 'zlib')
optdepends=('lib32-gcc-libs' 'lib32-zlib')

source=("https://dl-ssl.google.com/android/repository/build-tools_${pkgver}-linux.zip")
sha512sums=('8eace35b320771a5bfa90d57f1de5a295d690aa5249f25e4527521827138b340b40dce39935998fe880b816b935b262b869fa27e784da24c7b13f98646f03b02')
options=('!strip')

_sdk=android-sdk
_android=android-11

package() {
  cd "$pkgdir"

  install -Dm644 "${srcdir}/$_android/NOTICE.txt" usr/share/licenses/$pkgname/NOTICE.txt

  # mkdir -p opt etc/profile.d
  # echo 'export PATH=$PATH:/opt/$_sdk/build-tools/'"$_ver/" > etc/profile.d/${pkgname}.sh
  # echo 'setenv PATH ${PATH}:/opt/$_sdk/build-tools/'"$_ver/" > etc/profile.d/${pkgname}.csh
  # chmod 755 etc/profile.d/${pkgname}.{csh,sh}

  target="$pkgdir/opt/$_sdk/build-tools/$_ver"
  mkdir -p "$target"
  cp -r "$srcdir/$_android/"* "$target"
  chmod +Xr -R "$target"
}
