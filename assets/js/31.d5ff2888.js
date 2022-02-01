(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{429:function(e,t,s){"use strict";s.r(t);var r=s(56),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"elevate-frequent-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elevate-frequent-issues"}},[e._v("#")]),e._v(" ELevate Frequent Issues")]),e._v(" "),s("p",[e._v("These are the ELevate project issues the AlmaLinux team and community are currently working on together. You can find here the most frequent problems and guidance steps on how to solve them.")]),e._v(" "),s("h2",{attrs:{id:"leapp-upgrade-error-caused-by-important-modules-from-kernel-drivers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leapp-upgrade-error-caused-by-important-modules-from-kernel-drivers"}},[e._v("#")]),e._v(" Leapp upgrade error caused by important modules from kernel drivers")]),e._v(" "),s("p",[e._v('Proceeding with migration, you can get the "Detected loaded kernel drivers, which have been removed" error.')]),e._v(" "),s("p",[e._v("The issue can be caused by the mentioned modules:")]),e._v(" "),s("ul",[s("li",[e._v("mptbase")]),e._v(" "),s("li",[e._v("mptscsih")]),e._v(" "),s("li",[e._v("mptspi")])]),e._v(" "),s("p",[e._v("Follow these steps to resolve the issue:")]),e._v(" "),s("ul",[s("li",[e._v("First, you need to backup initramfs. Initramfs boots any Linux OS and mounts the root filesystem. It contains kernel modules and initial scripts. Use root or sudo user credential to run this command:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cp /boot/initramfs-$(uname -r).img /boot/initramfs-$(uname -r).img.backup\n")])])]),s("ul",[s("li",[e._v("Use the Initramfs infrastructure "),s("code",[e._v("dracut")]),e._v(" to include all drivers to build a generic initramfs:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("dracut -N -f\n")])])]),s("ul",[s("li",[s("p",[e._v("After the previous step is completed, run the "),s("code",[e._v("shutdown")]),e._v(" command to stop the system.")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("em",[e._v("Virtual Machines")]),e._v(" and choose the "),s("em",[e._v("Edit Settings")]),e._v(" option and change SCSI Controller type to "),s("em",[e._v("VMware Paravirtual")]),e._v(". Save changes.")])]),e._v(" "),s("li",[s("p",[e._v("Now, you can boot your system and run one more "),s("code",[e._v("dracut")]),e._v(" command to regenerate initramfs.")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("dracut -f --regenerate-all\n")])])]),s("h2",{attrs:{id:"known-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),s("ul",[s("li",[e._v("For now, the ELevate project supports only CentOS repositories. It doesn't support other third-party (external) repositories.")]),e._v(" "),s("li",[e._v("Some CentOS 7 packages can remain after the upgrade.")])]),e._v(" "),s("p",[e._v("AlmaLinux Team is working hard to get a solution for these issues. Any contribution is valuable and helps us out. If you want to help and contribute, see "),s("RouterLink",{attrs:{to:"/elevate/#how-to-contribute"}},[e._v("how to conribute")]),e._v(" information.")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);