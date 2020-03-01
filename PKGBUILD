#@IgnoreInspection BashAddShebang
# Maintainer: Natalia Portillo <claunia@claunia.com>
_netcoretarget='netcoreapp2.0'
_aarubase=aaru
packager='Natalia Portillo <claunia@claunia.com>'
pkgbase='aaru-git'
pkgname=('aaru-git' 'aaru-gtk-git')
pkgver=v4.5.1.1692.r811.g16849ea2
pkgrel=2
pkgdesc='Disc image management and creation tool for disks, tapes, optical and solid state media'
arch=('x86_64' 'armv7h' 'aarch64')
url='http://www.aaru.app'
license=('GPL')
source=('git://github.com/aaru-dps/Aaru')
makedepends=('dotnet-sdk>=2.0.0' 'git')
options=('!strip' 'staticlibs')
sha256sums=('SKIP')
provides=('aaru')
conflicts=('aaru')
depends=('icu' 'krb5' 'libcurl.so' 'libunwind' 'openssl-1.0' 'zlib')

if [ $arch == 'aarch64' ]; then
    dotnet_rid=linux-arm64
elif [ $arch == 'armv7h' ]; then
    dotnet_rid=linux-arm
else
    dotnet_rid=linux-x64
fi

pkgver() {
  cd "${srcdir}"/"${_aarubase}"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "${srcdir}"/"${_aarubase}"
  git submodule update --init --checkout --recursive
}

build() {
    cd "${srcdir}"/"${_aarubase}"
    dotnet restore Aaru.sln
    dotnet build -f ${_netcoretarget} -c Debug Aaru.sln
    dotnet publish -f ${_netcoretarget} -c Debug --self-contained -r ${dotnet_rid} Aaru.sln
    dotnet restore Aaru.Gtk.sln
    dotnet build -f ${_netcoretarget} -c Debug Aaru.Gtk.sln
    dotnet publish -f ${_netcoretarget} -c Debug --self-contained -r ${dotnet_rid} Aaru.Gtk.sln
}

package_aaru-git() {
    cd "${srcdir}"/"${_aarubase}"/Aaru/bin/Debug/${_netcoretarget}/${dotnet_rid}/publish

    # Create destination directory
    install -d -m0755 -g 0 "${pkgdir}"/opt/Aaru

    # Copy Linux binary
    install -m0755 -g 0 -t "${pkgdir}"/opt/Aaru Aaru

    # Copy Linux dependencies
    install -m0755 -g 0 -t "${pkgdir}"/opt/Aaru *.so
    install -m0755 -g 0 -t "${pkgdir}"/opt/Aaru *.a
    install -m0755 -g 0 -t "${pkgdir}"/opt/Aaru createdump
    install -m0755 -g 0 -t "${pkgdir}"/opt/Aaru sosdocsunix.txt

    # Copy .NET dependencies
    install -m0755 -g 0 -t "${pkgdir}"/opt/Aaru *.dll

    # Copy .NET configuration files
    install -m0644 -g 0 -t "${pkgdir}"/opt/Aaru *.json

    # Copy documentation files
    install -m0644 -g 0 -t "${pkgdir}"/opt/Aaru *.md
    install -m0644 -g 0 -t "${pkgdir}"/opt/Aaru LICENSE*

    # Copy .NET debug files
    install -m0644 -g 0 -t "${pkgdir}"/opt/Aaru *.pdb

    # Link executable
    install -d -m0755 -g 0 "${pkgdir}"/usr/bin
    ln -sf /opt/Aaru/Aaru "${pkgdir}"/usr/bin/aaru
}

# TODO: Can optimize so no need to install separately with a depend?
package_aaru-gtk-git() {
    depends=('gtk3')

    cd "${srcdir}"/"${_aarubase}"/Aaru.Gtk/bin/Debug/${_netcoretarget}/${dotnet_rid}/publish

    # Create destination directory
    install -d -m0755 -g 0 "${pkgdir}"/opt/Aaru.Gtk

    # Copy Linux binary
    install -m0755 -g 0 -t "${pkgdir}"/opt/Aaru.Gtk AaruGui

    # Copy Linux dependencies
    install -m0755 -g 0 -t "${pkgdir}"/opt/Aaru.Gtk *.so
    install -m0755 -g 0 -t "${pkgdir}"/opt/Aaru.Gtk *.a
    install -m0755 -g 0 -t "${pkgdir}"/opt/Aaru.Gtk createdump
    install -m0755 -g 0 -t "${pkgdir}"/opt/Aaru.Gtk sosdocsunix.txt

    # Copy .NET dependencies
    install -m0755 -g 0 -t "${pkgdir}"/opt/Aaru.Gtk *.dll

    # Copy .NET configuration files
    install -m0644 -g 0 -t "${pkgdir}"/opt/Aaru.Gtk *.json

    # Copy documentation files
    install -m0644 -g 0 -t "${pkgdir}"/opt/Aaru.Gtk *.md
    install -m0644 -g 0 -t "${pkgdir}"/opt/Aaru.Gtk LICENSE*

    # Copy .NET debug files
    install -m0644 -g 0 -t "${pkgdir}"/opt/Aaru.Gtk *.pdb

    # Link executable
    install -d -m0755 -g 0 "${pkgdir}"/usr/bin
    ln -sf /opt/Aaru/AaruGui "${pkgdir}"/usr/bin/aaru-gtk
}
