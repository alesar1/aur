# Maintainer: Runnytu < runnytu at gmail dot com >
# OldMaintainer: FreeK <stephan@confidr.me>
# Contributor: olav-st <olav.s.th@gmail.com>
# Contributor: David Manouchehri <manouchehri@riseup.net>

### BUILD OPTIONS
# Set to y to enable nomachine service autostart
_autoservice=n
# Set to y to enable firewall autorules
_autofirewall=n
### END BUILD OPTIONS

pkgname=nomachine
pkgver=8.0.168
_pkgvermain=8.0
_pkgrel_i686=2
_pkgrel_x86_64=2
_pkgrel_armv6h=3
_pkgrel_armv7h=3
_pkgrel_armv8h=3
_pkgrel_aarch64=${_pkgrel_armv8h}
_pkgrel_pentium4=${_pkgrel_i686}
pkgrel=1
pkgdesc="Remote desktop application"
groups=('network')
url="http://www.nomachine.com"
license=('custom:"NoMachine EULA"')
arch=('x86_64' 'i686' 'armv6h' 'armv7h' 'armv8h' 'aarch64' 'pentium4')
options=('!strip')
conflicts=('nxmanager' 'nxwebplayer' 'nxserver' 'nxnode' 'nxclient')
depends=('bash' 'openssh' 'nawk')
optdepends=('xorg-xauth: allows logging into a headless machine')
sha512sums_x86_64=('2050466b4adda632e341468b7a51315e426c6d6bfc86bc40de17096e8704785f11a691c955e25c4119e72a6e786972091d54b137eda2475de31f714e87872538')
sha512sums_i686=('21fd05dfcdb71c30eaddfd65dc921fd9e5f7de0d886a063de08b89bd06c574c420afbca35aa38033bb038a0b8ae20f60be82d03d83fd626e74a025fd480da83c')
sha512sums_armv6h=('234f82c0b8205109bccefb8804afe662c402e5e2fe9a4827f573386c77520b32591c08b90303e2c0e16f1891c2fae7e6529880cc63efef1f39d5e9b00bce9e30')
sha512sums_armv7h=('a762b1501256f51e5414fbae770ad1a0dca48192a409a2229a74f6657fc2845af09876c35ead003535e3f2f77951365af7a0b4852bc11771f15192dfd12d832d')
sha512sums_armv8h=('723b9bda54540f77c172990f753cdfa798917cec1d09812b48e905558f77b9029e83b5e5f3cce92f28d96550274d4560f6ddfa89862216f19c12f3c0a62a8f1a')
sha512sums_aarch64=('723b9bda54540f77c172990f753cdfa798917cec1d09812b48e905558f77b9029e83b5e5f3cce92f28d96550274d4560f6ddfa89862216f19c12f3c0a62a8f1a')
sha512sums_pentium4=('21fd05dfcdb71c30eaddfd65dc921fd9e5f7de0d886a063de08b89bd06c574c420afbca35aa38033bb038a0b8ae20f60be82d03d83fd626e74a025fd480da83c')
source_x86_64=("http://download.nomachine.com/download/${_pkgvermain}/Linux/${pkgname}_${pkgver}_${_pkgrel_x86_64}_x86_64.tar.gz")
source_i686=("http://download.nomachine.com/download/${_pkgvermain}/Linux/${pkgname}_${pkgver}_${_pkgrel_i686}_i686.tar.gz")
source_armv6h=("http://download.nomachine.com/download/${_pkgvermain}/Raspberry/${pkgname}_${pkgver}_${_pkgrel_armv6h}_armv6hl.tar.gz")
source_armv7h=("http://download.nomachine.com/download/${_pkgvermain}/Raspberry/${pkgname}_${pkgver}_${_pkgrel_armv7h}_armv7hl.tar.gz")
source_armv8h=("http://download.nomachine.com/download/${_pkgvermain}/Raspberry/${pkgname}_${pkgver}_${_pkgrel_armv8h}_aarch64.tar.gz")
source_aarch64=("${source_armv8h[@]}")
source_pentium4=("${source_i686[@]}")
install=nomachine.install

prepare()
{
#Fix Fedora Version Var And Libstdc++ Rename
tar -zxf "$srcdir/NX/etc/NX/server/packages/nxrunner.tar.gz" NX/scripts/setup/nxrunner
sed -i 's/    majorFedoraVersion.*/    majorFedoraVersion=23/' "$srcdir/NX/scripts/setup/nxrunner"
tar -zxf "$srcdir/NX/etc/NX/server/packages/nxclient.tar.gz" "NX/lib/"
for _libstdc in "$srcdir/NX/lib/"libstdc++.*; do
mv "${_libstdc}" ${_libstdc}.nomachine
done
gzip -d "$srcdir/NX/etc/NX/server/packages/nxrunner.tar.gz"
tar -rf "$srcdir/NX/etc/NX/server/packages/nxrunner.tar" NX/scripts/setup/nxrunner -C "$srcdir/NX/scripts/setup/nxrunner"
tar --delete -f "$srcdir/NX/etc/NX/server/packages/nxrunner.tar" "NX/lib/"
tar -rf "$srcdir/NX/etc/NX/server/packages/nxrunner.tar" "NX/lib/" -C "$srcdir/NX/lib/"
gzip "$srcdir/NX/etc/NX/server/packages/nxrunner.tar"
rm -fr "$srcdir/NX/scripts"*
rm -fr "$srcdir/NX/lib"*
#Change Automatic Service Start And/Or Firewall Automatic Rules If Apply
if [ $_autoservice = y ] && [ $_autofirewall = y ]; then
echo "##################################################################"
echo "#Enabling Automatic Service Start And Firewall Automatic Rules#"
echo "##################################################################"
elif [ $_autoservice = y ] && [ $_autofirewall = n ]; then
echo "#####################################"
echo "#Enabling Automatic Service Start#"
echo "#####################################"
tar -zxf "$srcdir/NX/etc/NX/server/packages/nxserver.tar.gz" NX/etc/server-fedora.cfg.sample
sed -i 's/#EnableFirewallConfiguration 1/EnableFirewallConfiguration 0/' NX/etc/server-fedora.cfg.sample
gzip -d "$srcdir/NX/etc/NX/server/packages/nxserver.tar.gz"
tar -rf "$srcdir/NX/etc/NX/server/packages/nxserver.tar" NX/etc/server-fedora.cfg.sample -C "$srcdir/NX/etc/server-fedora.cfg.sample"
gzip "$srcdir/NX/etc/NX/server/packages/nxserver.tar"
rm -fr "$srcdir/NX/etc/server-fedora.cfg.sample"
elif [ $_autoservice = n ] && [ $_autofirewall = y ]; then
echo "######################################"
echo "#Enabling Firewall Automatic Rules#"
echo "######################################"
tar -zxf "$srcdir/NX/etc/NX/server/packages/nxserver.tar.gz" NX/etc/server-fedora.cfg.sample
sed -i 's/#StartNXDaemon Automatic/StartNXDaemon Manual/' NX/etc/server-fedora.cfg.sample
gzip -d "$srcdir/NX/etc/NX/server/packages/nxserver.tar.gz"
tar -rf "$srcdir/NX/etc/NX/server/packages/nxserver.tar" NX/etc/server-fedora.cfg.sample -C "$srcdir/NX/etc/server-fedora.cfg.sample"
gzip "$srcdir/NX/etc/NX/server/packages/nxserver.tar"
rm -fr "$srcdir/NX/etc/server-fedora.cfg.sample"
elif [ $_autoservice = n ] && [ $_autofirewall = n ]; then
echo "###################################################################"
echo "#Disabling Automatic Service Start And Firewall Automatic Rules#"
echo "###################################################################"
tar -zxf "$srcdir/NX/etc/NX/server/packages/nxserver.tar.gz" NX/etc/server-fedora.cfg.sample
sed -i 's/#EnableFirewallConfiguration 1/EnableFirewallConfiguration 0/' NX/etc/server-fedora.cfg.sample
sed -i 's/#StartNXDaemon Automatic/StartNXDaemon Manual/' NX/etc/server-fedora.cfg.sample
gzip -d "$srcdir/NX/etc/NX/server/packages/nxserver.tar.gz"
tar -rf "$srcdir/NX/etc/NX/server/packages/nxserver.tar" NX/etc/server-fedora.cfg.sample -C "$srcdir/NX/etc/server-fedora.cfg.sample"
gzip "$srcdir/NX/etc/NX/server/packages/nxserver.tar"
rm -fr "$srcdir/NX/etc/server-fedora.cfg.sample"
fi
}

package()
{
cd "$srcdir"
mkdir "$srcdir/NX/etc" -p
install -d "$pkgdir/usr/"
cp -a NX "$pkgdir/usr/NX"
}

