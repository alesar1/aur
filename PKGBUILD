# Maintainer: Moses Narrow <moe_narrow@use.startmail.com>
# Maintainer: Rudi [KittyCash] <rudi@skycoinmail.com>
projectname=skycoin
pkgname=skywire
pkgname1=skywire
githuborg=SkycoinProject
pkgdesc="Skywire: Building a New Internet. Skycoin.com"
pkgver='autogenerated'
#pkgver='autogenerated'
pkgrel=1
#pkgrel=1
arch=('any')
pkggopath="github.com/${githuborg}/skywire-mainnet"
url="https://${pkggopath}"
group=skycoinproject
license=()
makedepends=(git go npm python python2 skycoin-keyring)
provides=('skywire')
conflicts=('skywire')
install=skywire.install
source=("git+${url}.git#branch=${BRANCH:-develop}"
"skywire-scripts.tar.gz"
"PKGBUILD.sig")
sha256sums=('SKIP'
            'fff8b9f7d4e60c8993497a963161f934d445f4d7cf2ff47bc787dcb459c8b351'
            'SKIP')
validpgpkeys=('DE08F924EEE93832DABC642CA8DC761B1C0C0CFC'  # Moses Narrow <moe_narrow@use.startmail.com>
'98F934F04F9334B81DFA3398913BBD5206B19620') #iketheadore skycoin <luxairlake@protonmail.com>
#tar -czvf skywire-scripts.tar.gz skywire-scripts
#updatepkgsums
export GOOS=linux
export GOPATH="${srcdir}"
export GOROOT="$builddir"
export GOBIN="$GOROOT"/bin
export GOROOT_FINAL=/usr/lib/go

export CGO_ENABLED=1

case "$CARCH" in
x86)      export GOARCH="386" GO386="387" ;;
x86_64)   export GOARCH="amd64" ;;
arm*)     export GOARCH="arm" ;;
armel)    export GOARCH="arm" GOARM="5" ;;
armhf)    export GOARCH="arm" GOARM="6" ;;
armv7)    export GOARCH="arm" GOARM="7" ;;
armv8)    export GOARCH="arm64" ;;
aarch64)  export GOARCH="arm64" ;;
mips)     export GOARCH="mips" ;;
mips64)   export GOARCH="mips64" ;;
mips64el) export GOARCH="mips64le" ;;
mipsel)   export GOARCH="mipsle" ;;
*)        return 1 ;;
	esac

pkgver() {
	cd "${srcdir}/skywire-mainnet"
  local version=$(git describe --abbrev=0 | tr --delete v)
	local version=${version//-/_}
	local date=$(git log -1 --format="%cd" --date=short | sed s/-//g)
	local count=$(git rev-list --count HEAD)
	local commit=$(git rev-parse --short HEAD)
	echo "${version}_${date}.${count}_${commit}_${BRANCH:-develop}"
}

prepare() {
	#verify PKGBUILD signature
	gpg --verify ../PKGBUILD.sig ../PKGBUILD

  # https://wiki.archlinux.org/index.php/Go_package_guidelines
	mkdir -p ${srcdir}/go/src/github.com/${githuborg}/ ${srcdir}/go/bin ${srcdir}/go/apps
  ln -rTsf ${srcdir}/skywire-mainnet ${srcdir}/go/src/${pkggopath}
  cd ${srcdir}/go/src/${pkggopath}/
  #export GOPATH="${srcdir}"/go
  #export GOBIN=${GOPATH}/bin
  #export PATH=${GOPATH}/bin:${PATH}
}

build() {
  export GOPATH=${srcdir}/go
  export GOBIN=${GOPATH}/bin
  export GOAPPS=${GOPATH}/apps
  export PATH=${GOPATH}/bin:${PATH}
  cd ${srcdir}/go/src/${pkggopath}
  #build hypervisor UI
  make install-deps-ui
  make lint-ui
  make build-ui
  #build binaries
	cmddir=${srcdir}/go/src/${pkggopath}/cmd
  #using go build for determinism
	cd ${cmddir}/apps/skychat
  msg2 'building skychat binary'
  go build -mod=mod -trimpath -ldflags '-extldflags ${LDFLAGS}' -ldflags=-buildid= -o $GOAPPS/ .
  cd ${cmddir}/apps/skysocks
  msg2 'building skysocks binary'
  go build -mod=mod -trimpath -ldflags '-extldflags ${LDFLAGS}' -ldflags=-buildid= -o $GOAPPS/ .
  cd ${cmddir}/apps/skysocks-client
  msg2 'building skysocks-client binary'
  go build -mod=mod -trimpath -ldflags '-extldflags ${LDFLAGS}' -ldflags=-buildid= -o $GOAPPS/ .
  cd ${cmddir}/skywire-visor
  msg2 'building skywire-visor binary'
  go build -mod=mod -trimpath -ldflags '-extldflags ${LDFLAGS}' -ldflags=-buildid= -o $GOBIN/ .
  cd ${cmddir}/skywire-cli
  msg2 'building skywire-cli binary'
  go build -mod=mod -trimpath -ldflags '-extldflags ${LDFLAGS}' -ldflags=-buildid= -o $GOBIN/ .
	cd ${cmddir}/setup-node
  msg2 'building setup-node binary'
  go build -mod=mod -trimpath -ldflags '-extldflags ${LDFLAGS}' -ldflags=-buildid= -o $GOBIN/ .
	cd ${cmddir}/hypervisor
  msg2 'building hypervisor binary'
  go build -mod=mod -trimpath -ldflags '-extldflags ${LDFLAGS}' -ldflags=-buildid= -o $GOBIN/ .
  #binary transparency
  cd $GOBIN
  msg2 'binary sha256sums'
  sha256sum $(ls)
  cd $GOAPPS
  sha256sum $(ls)

}

package() {
  export GOPATH=${srcdir}/go
  export GOBIN=${GOPATH}/bin
  export GOAPPS=${GOPATH}/apps
  #create directory trees
  mkdir -p ${pkgdir}/usr/bin/apps
  msg2 'installing binaries'
  skywirebins=$( ls ${GOBIN} )
  for i in ${skywirebins}; do
    install -Dm755 ${GOBIN}/${i} ${pkgdir}/usr/bin/${i}
  done
  skywireapps=$( ls ${GOAPPS} )
  for i in ${skywireapps}; do
    install -Dm755 ${GOAPPS}/${i} ${pkgdir}/usr/bin/apps/${i}
  done
  #install scripts
  install -Dm755 ${srcdir}/${pkgname1}-scripts/skywire-halt.sh ${pkgdir}/usr/bin/skywire-halt
  install -Dm755 ${srcdir}/${pkgname1}-scripts/skywire.sh ${pkgdir}/usr/bin/skywire
  install -Dm755 ${srcdir}/${pkgname1}-scripts/skywire-setuser.sh ${pkgdir}/usr/bin/skywire-setuser
  install -Dm644  ${srcdir}/${pkgname1}-scripts/hypervisorconfig.PKGBUILD  ${pkgdir}/usr/lib/${projectname}/${pkgname1}/hypervisorconfig/PKGBUILD
	cd ${pkgdir}/usr/bin/
	mv hypervisor ${pkgname1}-hypervisor
  #install the system.d services
  install -Dm644 ${srcdir}/go/src/${pkggopath}/init/${pkgname1}-hypervisor.service ${pkgdir}/usr/lib/systemd/system/${pkgname1}-hypervisor.service
  install -Dm644 ${srcdir}/go/src/${pkggopath}/init/${pkgname1}-visor.service ${pkgdir}/usr/lib/systemd/system/${pkgname1}-visor.service
	#tls key and certificate generation
	install -Dm755 ${srcdir}/${_pkgname}-scripts/generate.sh ${pkgdir}/usr/lib/skycoin/skywire/ssl/generate.sh
  ln -rTsf ${pkgdir}/usr/lib/skycoin/skywire/ssl/generate.sh ${pkgdir}/usr/bin/skywire-tls-gen
	install -Dm644 ${srcdir}/${_pkgname}-scripts/certificate.cnf ${pkgdir}/usr/lib/skycoin/skywire/ssl/certificate.cnf

}
