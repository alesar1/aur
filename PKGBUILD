# Maintainer: Moses Narrow <moe_narrow@use.startmail.com>
# Maintainer: Rudi [KittyCash] <rudi@skycoinmail.com>
pkgname=cx-latest
_pkgname=cx
_projectname=skycoin
_githuborg=${_projectname}
pkgdesc="CX Skycoin Blockchain Programming Language - most recent github commits (+opengl)"
pkgver='autogenerated'
_pkggopath="github.com/${_githuborg}/${_pkgname}"
pkgrel=4
arch=('any')
url="https://${_pkggopath}"
license=()
makedepends=('git' 'go' 'gcc' 'glade' 'xorg-server-xvfb' 'libxinerama' 'libxcursor' 'libxrandr' 'libglvnd' 'libglade' 'mesa' 'libxi' 'cairo' 'perl' 'pango' 'goyacc' 'musl' 'kernel-headers-musl')
source=("git+${url}.git#branch=${BRANCH:-develop}")
sha256sums=('SKIP')
#validpgpkeys=('DE08F924EEE93832DABC642CA8DC761B1C0C0CFC'  # Moses Narrow <moe_narrow@use.startmail.com>
#                           '98F934F04F9334B81DFA3398913BBD5206B19620') #iketheadore skycoin <luxairlake@protonmail.com>

  pkgver() {
  	cd "${srcdir}/${_pkgname}"
  	local date=$(git log -1 --format="%cd" --date=short | sed s/-//g)
  	local count=$(git rev-list --count HEAD)
  	local commit=$(git rev-parse --short HEAD)
  	echo "${date}.${count}_${commit}"
  }

prepare() {
	#gpg --import key
	#verify PKGBUILD signature
	#gpg --verify ${srcdir}/PKGBUILD.sig ../PKGBUILD
  # https://wiki.archlinux.org/index.php/Go_package_guidelines
  mkdir -p ${srcdir}/go/src/${_pkggopath//${_pkgname}/} "${srcdir}"/go/bin
  ln -rTsf ${srcdir}/${_pkgname} ${srcdir}/go/src/${_pkggopath}
  cd ${srcdir}/go/src/${_pkggopath}/
  git checkout develop
  git submodule --quiet update --init --recursive
}

build() {
  export GOPATH=${srcdir}/go
  export GOBIN=${GOPATH}/bin
#  export PATH=${GOPATH}/bin:${PATH}
#  cp -b Makefile ${srcdir}/go/src/${pkggopath}/Makefile
cd ${srcdir}/go/src/${_pkggopath}
#make build-full
#go get -u github.com/SkycoinProject/nex ##added as makedep
#go get -u modernc.org/goyacc ##added as makedep
goyacc -o cxgo/cxgo0/cxgo0.go cxgo/cxgo0/cxgo0.y
goyacc -o cxgo/parser/cxgo.go cxgo/parser/cxgo.y
  _cmddir=${srcdir}/go/src/${_pkggopath}/cmd
#static compilation
_msg2 'building cx binary'
cd ${srcdir}/go/src/${_pkggopath}/
go build -tags="base cxfx" -trimpath --ldflags '-linkmode external -extldflags "-static" -buildid=' -i -o $GOBIN/ cxgo/.
cd ${srcdir}/go/src/${_pkggopath}/cmd/newcoin
_msg2 'building newcoin binary'
go build -trimpath --ldflags '-linkmode external -extldflags "-static" -buildid=' -o $GOBIN/ .  #binary transparency
cd $GOBIN
msg2 'binary sha256sums'
sha256sum $(ls)

}

package() {
options=(!strip staticlibs)
#make dirs
mkdir -p ${pkgdir}/usr/bin
mkdir -p ${pkgdir}/opt/${_pkgname}/bin
#install sources
#cp -r ${srcdir}/${pkgname1} ${pkgdir}/usr/lib/${projectname}/go/src/github.com/${projectname}/${pkgname1}
_msg2 'installing binaries'
install -Dm755 ${srcdir}/go/bin/newcoin ${pkgdir}/opt/${_pkgname}/bin/newcoin
ln -rTsf ${pkgdir}/opt/${_pkgname}/bin ${pkgdir}/usr/bin/newcoin
install -Dm755 ${srcdir}/go/bin/${_pkgname} ${pkgdir}/opt/${_pkgname}/bin/${_pkgname}
ln -rTsf ${pkgdir}/opt/${_pkgname}/bin/${_pkgname} ${pkgdir}/usr/bin/${_pkgname}
chmod 755 ${pkgdir}/usr/bin/*
}

_msg2() {
(( QUIET )) && return
local mesg=$1; shift
printf "${BLUE}  ->${ALL_OFF}${BOLD} ${mesg}${ALL_OFF}\n" "$@"
}
