# Maintainer: Jordan Day < jordanday444 at gmail dot com >

pkgname=mono-addins
pkgver=1.3.3
pkgrel=0
pkgdesc="Generic framework for creating extensible applications, and for creating add-ins which extend those applications."
arch=('i686' 'x86_64')
url="https://github.com/mono/mono-addins"
source=(https://github.com/mono/mono-addins/archive/mono-addins-1.3.3.tar.gz)
license=('MIT')
provides=("$pkgname")
depends=('bash')
makedepends=('pkgconfig' 'msbuild-bin')

build() {
  cd "$srcdir"/${pkgname}-${pkgname}-${pkgver}
  ./autogen.sh --prefix=/usr --enable-gui
  make
}

package() {
  cd "$srcdir"/${pkgname}-${pkgname}-${pkgver}
  msbuild.exe Mono.Addins/Mono.Addins.csproj /p:WarningLevel=0;Configuration=Release
  msbuild.exe Mono.Addins.CecilReflector/Mono.Addins.CecilReflector.csproj /p:WarningLevel=0;Configuration=Release
  msbuild.exe Mono.Addins.Gui/Mono.Addins.Gui.csproj /p:WarningLevel=0;Configuration=Release
  msbuild.exe Mono.Addins.GuiGtk3/Mono.Addins.GuiGtk3.csproj /p:WarningLevel=0;Configuration=Release
  msbuild.exe Mono.Addins.MSBuild/Mono.Addins.MSBuild.csproj /p:WarningLevel=0;Configuration=Release
  msbuild.exe Mono.Addins.Setup/Mono.Addins.Setup.csproj /p:WarningLevel=0;Configuration=Release
  make DESTDIR="${pkgdir}" install
}
md5sums=('7ac27ffa4616fd03dc299749f16bce2a')
