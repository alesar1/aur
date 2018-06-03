# $Id$
# Maintainer: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Max Liebkies <mail@maxliebkies.de>
# Contributor: Florian Maunier <fmaunier@gmail.com>
# Contributor: Stephen Howell <macosx.4@gmail.com>

pkgname=aspnetcore-runtime
pkgver=2.1.0
pkgrel=1
pkgdesc='The ASP.NET Core runtime'
arch=('x86_64')
url='https://www.microsoft.com/net/core'
license=('MIT')
depends=('dotnet-runtime')
provides=('aspnetcore-runtime-2.1')
conflicts=('aspnetcore-runtime-2.1')
options=('staticlibs')
source=('https://download.microsoft.com/download/9/1/7/917308D9-6C92-4DA5-B4B1-B4A19451E2D2/aspnetcore-runtime-2.1.0-linux-x64.tar.gz')
sha256sums=('1f75c6d98cf729f74dfbeb5a36207567912e0e61e9bac0bf0f72046fa7a81d4b')

package() {
  pkgdesc='The ASP.NET Core runtime'
  depends=('dotnet-runtime')
  provides=('aspnetcore-runtime-2.1')
  conflicts=('aspnetcore-runtime-2.1')

  install -dm 755 "${pkgdir}"/{opt/dotnet/shared,usr/share/licenses}
  cp -dr --no-preserve='ownership' shared/Microsoft.AspNetCore* "${pkgdir}"/opt/dotnet/shared/
  ln -s dotnet-host "${pkgdir}"/usr/share/licenses/aspnetcore-runtime
}

# vim: ts=2 sw=2 et:
