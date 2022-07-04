# Maintainer: gigas002 <gigas002@pm.me>

pkgname=docfx-git
_pkgname=docfx
pkgver=r3163.fe6402350b
pkgrel=1
pkgdesc="Tools for building and publishing API documentation for .NET projects. Build from v3 branch atm"
arch=('x86_64')
url="https://github.com/dotnet/docfx"
license=('MIT')
groups=()
makedepends=('git' 'dotnet-sdk')
checkdepends=()
optdepends=()
provides=("docfx")
conflicts=("docfx")
replaces=()
backup=()
options=(!strip)
source=(git+"${url}".git#branch=v3)
md5sums=('SKIP')

pkgver() {
    cd $srcdir/$_pkgname
  	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

# prepare() {
#     git clone --single-branch --branch v3 "${url}"
# }

build() {
    cd "${srcdir}/docfx/src/docfx"
    dotnet publish -c Release -r linux-x64 --self-contained true /p:PublishDir=../../publish/linux-x64 /p:PublishSingleFile=true /p:IncludeAllContentForSelfExtract=true #/p:PublishTrimmed=true}
}

package() {
	# install -d ${pkgdir}/opt/docfx
	install -d ${pkgdir}/usr/bin
    # cp -r ${srcdir}/docfx/publish/linux-x64/* ${pkgdir}/opt/docfx/
    # ln -s ${pkgdir}/opt/docfx/$_pkgname ${pkgdir}/usr/bin/$_pkgname
    cp ${srcdir}/docfx/publish/linux-x64/docfx ${pkgdir}/usr/bin/docfx
}
