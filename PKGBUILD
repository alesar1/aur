# Maintainer: Moses Narrow <moe_narrow@use.startmail.com>
# Maintainer: Rudi [KittyCash] <rudi@skycoinmail.com>
projectname=skycoin
pkgname=skywire
pkgname1=skywire
pkgdesc="TESTNET Skywire: Building a New Internet. Skycoin.net"
pkgver=20190803.777_6f1865ac
pkggopath="github.com/$projectname/$pkgname1"
pkgrel=2
arch=('any')
url="https://${pkggopath}"
license=()
makedepends=(dep git go gcc)
provides=('skywire')
conflicts=('skywire-mainnet')
source=("git+${url}.git#branch=${BRANCH:-master}")
sha256sums=('SKIP')

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
#dep init
#dep ensure
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
	#edit the following script for the IP of your manager; default is the official setup with manager at 192.168.0.2
  echo -e '#!/bin/bash \n #launch skywire official node with nohup \n export GOBIN=/usr/lib/skycoin/go/bin \n export GOPATH=/usr/lib/skycoin/go \n nohup skywire-node -connect-manager -manager-address 192.168.0.2:5998 -manager-web 192.168.0.2:8000 -discovery-address discovery.skycoin.net:5999-034b1cd4ebad163e457fb805b3ba43779958bba49f2c5e1e8b062482904bacdb68 -address :5000 -web-port :6001 > /dev/null 2>&1 &cd / > /dev/null 2>&1 &sleep 3 \n echo "skywire-node has started"' > $pkgname1-node-miner
  chmod +x $pkgname1-node-miner
  echo -e '#!/bin/bash \n #launch skywire qubes node with nohup \n export GOBIN=/usr/lib/skycoin/go/bin \n export GOPATH=/usr/lib/skycoin/go \n nohup skywire-node -connect-manager -manager-address 10.137.0.16:5998 -manager-web 10.137.0.16:8000 -discovery-address discovery.skycoin.net:5999-034b1cd4ebad163e457fb805b3ba43779958bba49f2c5e1e8b062482904bacdb68 -address :5000 -web-port :6001 > /dev/null 2>&1 &cd / > /dev/null 2>&1 &sleep 3 \n echo "skywire-node has started"' > $pkgname1-node-qubes
  chmod +x $pkgname1-node-qubes
#script to set a custom manager IP address at runtime
	echo -e '#!/bin/bash \n #launch skywire official node with nohup and a custom IP \n read -p "Skywire Manager IP:" SKYMGRIP  \n echo "Skywire manager set to $SKYMGRIP" \n export GOBIN=/usr/lib/skycoin/go/bin \n export GOPATH=/usr/lib/skycoin/go \n nohup skywire-node -connect-manager -manager-address $SKYMGRIP:5998 -manager-web $SKYMGRIP:8000 -discovery-address discovery.skycoin.net:5999-034b1cd4ebad163e457fb805b3ba43779958bba49f2c5e1e8b062482904bacdb68 -address :5000 -web-port :6001 > /dev/null 2>&1 &cd / > /dev/null 2>&1 &sleep 3 \n echo "skywire-node has started"' > $pkgname1-node-setip
 chmod +x $pkgname1-node-setip
#script to set a custom manager IP address at boot to be used with the system.d service.
	echo -e '#!/bin/bash \n #launch skywire official node with nohup and a custom IP \n export GOBIN=/usr/lib/skycoin/go/bin \n export GOPATH=/usr/lib/skycoin/go \n nohup skywire-node -connect-manager -manager-address $SKYMGRIP:5998 -manager-web $SKYMGRIP:8000 -discovery-address discovery.skycoin.net:5999-034b1cd4ebad163e457fb805b3ba43779958bba49f2c5e1e8b062482904bacdb68 -address :5000 -web-port :6001 > /dev/null 2>&1 &cd / > /dev/null 2>&1 &sleep 3 \n echo "skywire-node has started"' > $pkgname1-node-envip
	chmod +x $pkgname1-node-envip
	echo -e '#!/bin/bash \n #halt skywire \n sudo killall skywire-node \n sudo killall skywire-manager \n \n echo "skywire halted"' > $pkgname1-halt
	chmod +x $pkgname1-halt

	msg 2 'creating system.d .service files'
	#these service files point to skywire & skywire-node-miner scripts from above
	#the systemd service files included with skywire are wrong for archlinux (debian formatted)
  cd $srcdir/go
	echo -e '[Unit] \n Description=Skywire Manager Node service \n	After=network.target \n After=network-online.target \n \n	[Service] \n Type=oneshot \n	ExecStart=/usr/bin/skywire \n	RemainAfterExit=yes \n ExecStop=/usr/bin/skywire-halt \n	TryExec=/usr/bin/skywire \n \n [Install] \n	WantedBy=multi-user.target ' > $pkgname1-manager.service
	echo -e '[Unit] \n Description=Skywire Node service \n	After=network.target \n After=network-online.target \n \n	[Service] \n Type=oneshot \n	ExecStart=/usr/bin/skywire-node-miner \n	RemainAfterExit=yes \n ExecStop=/usr/bin/skywire-halt \n	TryExec=/usr/bin/skywire \n \n [Install] \n	WantedBy=multi-user.target ' > $pkgname1-node.service
#use the following system.d service for a custom manager IP address;$ echo SKYMGRIP=<IP of skywire manager> >> .bashrc
#this service file points to skywire-node-env
	echo -e '[Unit] \n Description=Skywire Node service \n	After=network.target \n After=network-online.target \n \n	[Service] \n Type=oneshot \n	ExecStart=/usr/bin/skywire-node-envip \n	RemainAfterExit=yes \n ExecStop=/usr/bin/skywire-halt \n	TryExec=/usr/bin/skywire \n \n [Install] \n	WantedBy=multi-user.target ' > $pkgname1-node-envip.service
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
skybins=$srcdir/go/bin
skybins1=$pkgdir/usr/lib/$projectname/go/bin/
#collect the binaries & install
skywirebins=$( ls "$skybins")
for i in $skywirebins; do
  install -Dm755 $srcdir/go/bin/$i $pkgdir/usr/lib/$projectname/go/bin/$i
	ln -rTsf $pkgdir/usr/lib/$projectname/go/bin/$i $pkgdir/usr/bin/$pkgname1-$i
	chmod 755 $pkgdir/usr/bin/$pkgname1-$i
done
mv $pkgdir/usr/bin/$pkgname1-$pkgname1-manager $pkgdir/usr/bin/$pkgname1-manager
chmod 755 $pkgdir/usr/bin/$pkgname1-manager
mv $pkgdir/usr/bin/$pkgname1-$pkgname1-node $pkgdir/usr/bin/$pkgname1-node
chmod 755 $pkgdir/usr/bin/$pkgname1-node
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
#install the system.d service
install -Dm644 $srcdir/go/$pkgname1-manager.service ${pkgdir}/usr/lib/systemd/system/$pkgname1-manager.service
install -Dm644 $srcdir/go/$pkgname1-node.service ${pkgdir}/usr/lib/systemd/system/$pkgname1-node.service
install -Dm644 $srcdir/go/$pkgname1-node-envip.service ${pkgdir}/usr/lib/systemd/system/$pkgname1-node-envip.service
}
