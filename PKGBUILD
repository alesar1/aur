# Maintainer: Moses Narrow <moe_narrow@use.startmail.com>
# Maintainer: Steve Skydev <steve@skycoin.net>
projectname=skycoin
pkgname=skywire
pkgname1=skywire
pkgdesc="TESTNET Skywire: Building a New Internet. Skycoin.net"
pkgver=20190405.770_d87171b
pkggopath="github.com/$projectname/$pkgname1"
pkgrel=1
arch=('any')
url="https://${pkggopath}"
license=()
makedepends=(dep git go gcc)
provides=('skywire')
conflicts=('skywire-mainnet')
source=("git+${url}.git#branch=${BRANCH:-master}")
sha256sums=('SKIP')
validpgpkeys=('DE08F924EEE93832DABC642CA8DC761B1C0C0CFC')

export GOOS=linux
export GOPATH="$srcdir"
export GOROOT="$builddir"
export GOBIN="$GOROOT"/bin
export GOROOT_FINAL=/usr/lib/$pkgname1

export CGO_ENABLED=0

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
	cd "$srcdir/$pkgname1"
	local date=$(git log -1 --format="%cd" --date=short | sed s/-//g)
	local count=$(git rev-list --count HEAD)
	local commit=$(git rev-parse --short HEAD)
	echo "$date.${count}_$commit"
}

prepare() {
# https://wiki.archlinux.org/index.php/Go_package_guidelines
mkdir -p $srcdir/go/src/${pkggopath//$pkgname1/} $srcdir/go/bin
ln -rTsf $srcdir/$pkgname1 $srcdir/go/src/$pkggopath
cd $srcdir/go/src/$pkggopath/cmd
git checkout master
git submodule --quiet update --init --recursive

export GOPATH="$srcdir"/go
export GOBIN=${GOPATH}/bin
export PATH=${GOPATH}/bin:${PATH}
msg2 'installing go dependencies'
dep init
dep ensure
}

build() {
export GOPATH=$srcdir/go
export GOBIN=${GOPATH}/bin
export PATH=${GOPATH}/bin:${PATH}
cd $srcdir/go/src/$pkggopath/cmd
go install \
  -gcflags "all=-trimpath=${GOPATH}" \
  -asmflags "all=-trimpath=${GOPATH}" \
  -ldflags "-extldflags $LDFLAGS" \
  -v ./...

  msg 2 'creating launcher scripts for skywire'
  mkdir -p $srcdir/go/$pkgname1-scripts
  cd $srcdir/go/$pkgname1-scripts

  echo -e '#!/bin/bash \n #launch skywire manager with nohup \n skywire-manager-nohup \n skywire-node-nohup \n echo "skywire has started"' > $pkgname1
  chmod +x $pkgname1
  echo -e '#!/bin/bash \n #launch skywire manager with nohup \n export GOBIN=/usr/lib/skycoin/go/bin \n export GOPATH=/usr/lib/skycoin/go \n nohup skywire-manager -web-dir /usr/lib/skycoin/skywire/static/skywire-manager/ > /dev/null 2>&1 &sleep 3 \n echo "skywire-manager has started"' > $pkgname1-manager-nohup
  chmod +x $pkgname1-manager-nohup
  echo -e '#!/bin/bash \n #launch skywire node with nohup \n export GOBIN=/usr/lib/skycoin/go/bin \n export GOPATH=/usr/lib/skycoin/go \n nohup skywire-node -connect-manager -manager-address 127.0.0.1:5998 -manager-web 127.0.0.1:8000 -discovery-address discovery.skycoin.net:5999-034b1cd4ebad163e457fb805b3ba43779958bba49f2c5e1e8b062482904bacdb68 -address :5000 -web-port :6001 > /dev/null 2>&1 &cd / > /dev/null 2>&1 &sleep 3 \n echo "skywire-node has started"' > $pkgname1-node-nohup
  chmod +x $pkgname1-node-nohup
  echo -e '#!/bin/bash \n #launch skywire official node with nohup \n GOBIN=/usr/lib/skycoin/go/bin \n export GOPATH=/usr/lib/skycoin/go \n nohup skywire-node -connect-manager -manager-address 192.168.0.2:5998 -manager-web 192.168.0.2:8000 -discovery-address discovery.skycoin.net:5999-034b1cd4ebad163e457fb805b3ba43779958bba49f2c5e1e8b062482904bacdb68 -address :5000 -web-port :6001 > /dev/null 2>&1 &cd / > /dev/null 2>&1 &sleep 3 \n echo "skywire-node has started"' > $pkgname1-node-miner
  chmod +x $pkgname1-node-miner
  echo -e '#!/bin/bash \n #launch skywire qubes node with nohup \n export GOBIN=/usr/lib/skycoin/go/bin \n export GOPATH=/usr/lib/skycoin/go \n nohup skywire-node -connect-manager -manager-address 10.137.0.16:5998 -manager-web 10.137.0.16:8000 -discovery-address discovery.skycoin.net:5999-034b1cd4ebad163e457fb805b3ba43779958bba49f2c5e1e8b062482904bacdb68 -address :5000 -web-port :6001 > /dev/null 2>&1 &cd / > /dev/null 2>&1 &sleep 3 \n echo "skywire-node has started"' > $pkgname1-node-qubes
  chmod +x $pkgname1-node-qubes
}
package() {
  options=(!strip staticlibs)
  #create directory trees
  mkdir -p $pkgdir/usr/bin
  mkdir -p $pkgdir/usr/lib/$projectname/go/bin
  mkdir -p $pkgdir/usr/lib/$projectname/$pkgname1/
  #restate go envs
  export GOPATH=$pkgdir/usr/lib/$projectname/go
  export GOBIN=$pkgdir/usr/lib/$projectname/go/bin
  #install binaries & symlink to /usr/bin
	msg2 'installing binaries'
	skybins="$srcdir"/go/bin
	potentialnameconflicts=$( ls --ignore=skywire* "$skybins")
	cd $skybins
  for i in $potentialnameconflicts; do
    mv $skybins/$i $skybins/$pkgname1-$i
  done
	skywirebins=$( ls "$skybins")
	for i in $skywirebins; do
	  install -Dm755 $srcdir/go/bin/$i $pkgdir/usr/lib/$projectname/go/bin/$i
	  ln -rTsf $pkgdir/usr/lib/$projectname/go/bin/$i $pkgdir/usr/bin/$i
	  chmod 755 $pkgdir/usr/bin/$i
  done
  #install the web dir
  cp -r $srcdir/$pkgname1/static $pkgdir/usr/lib/$projectname/$pkgname1/
	mkdir -p $pkgdir/usr/share/doc/$projectname/$pkgname1
	#install the docs
  cp -r $srcdir/$pkgname1/docs/api $pkgdir/usr/share/doc/$projectname/$pkgname1-manager
  #install the scripts
  skywirescripts=$( ls $srcdir/go/$pkgname1-scripts )
  for i in $skywirescripts; do
    cp $srcdir/go/$pkgname1-scripts/$i $pkgdir/usr/bin/$i
  done
}
